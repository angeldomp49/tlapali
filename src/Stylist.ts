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
        return this.applyStylesRecursivelly(code);
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