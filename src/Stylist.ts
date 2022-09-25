import { Lang, Rule, StyleSet, SupportedLanguage, Theme } from "@makechtec/tlapali_dev";
import { TagFactory } from "./TagFactory";

export class Stylist{

    private theme: Theme;
    private lang: Lang;
    private tagFactory: TagFactory = new TagFactory();
    private tagName: string = 'span';
    private supportedLang: SupportedLanguage;

    constructor(theme: Theme, lang: Lang) {
        this.theme = theme;
        this.lang = lang;
        this.selectSupportedLang();
    }

    convert(code: string): string {
        let newCode = code;
        newCode = this.applyStylesRecursivelly(newCode);
        newCode = this.applyKeywordStyles(newCode);
        return newCode;
    }

    private applyStylesRecursivelly(code: string): string {

        let newCode = code;

        this.supportedLang.styleSets.forEach(styleSet => {

            const rule: Rule = this.lang.rules.find(rule => rule.name === styleSet.rule)!;
            const expression = new RegExp(rule.pattern, 'g');

            newCode = newCode.replace(expression, (match, p1, offset, str,groups) => {

                const target = groups['target'];
                
                const enclosed = this.addStyle(target, styleSet);

                return match.replace(target, enclosed);
            });
        });

        return newCode;
    }

    private applyKeywordStyles(code: string): string{

        if(this.supportedLang.keywordsStyle == null){
            return code;
        }

        let newCode = code;
        const styles = this.supportedLang.keywordsStyle!;
        const styleString =  this.tagFactory.createStyleAttribute(styles.join(' '));

        this.lang.keywords.forEach(keyword => {

            const expression = new RegExp("(\\W)(" + keyword + ")(\\s)", "g");

            newCode = newCode.replace(expression, (match, p1, p2, p3, offset, str,groups) => {

                const enclosedCode = this.tagFactory.encloseTextWithTag(p2, this.tagName, styleString);

                return p1 + enclosedCode + p3;
            });
        });

        return newCode;

    }

    private addStyle(code: string, styleSet: StyleSet): string{

        const style: string = this.tagFactory.createStyleAttribute(styleSet.styles.join(' '));

        return this.tagFactory.encloseTextWithTag(code, this.tagName, style);
    }

    private selectSupportedLang(){
        this.supportedLang = this.theme.supportedLaguages.find( language => language.name === this.lang.name)!;
    }

    setTagFactory(tagFactory: TagFactory): void {
        this.tagFactory = tagFactory;
    }

    setTagName(name: string): void {
        this.tagName = name;
    }

}