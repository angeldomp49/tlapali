/// <reference types="react" />
import { Lang, Theme } from "@makechtec/tlapali_dev";
export declare class Translator {
    private theme;
    private lang;
    private tagFactory;
    private tagName;
    private supportedLang;
    constructor(theme: Theme, lang: Lang);
    convert(code: string): string;
    private applyStylesRecursivelly;
    private addStyle;
    private selectSupportedLang;
    setTagFactory(tagFactory: TagFactory): void;
    setTagName(name: string): void;
}
export declare class TagFactory {
    createStartTag(tagName: string, extraAttributes?: string): string;
    createEndTag(tagName: string): string;
    createStyleAttribute(style: string): string;
    encloseTextWithTag(text: string, tagName: string, extraAttributes?: string): string;
}
export declare const Code: (props: {
    theme: Theme;
    lang: Lang;
    children?: any;
}) => JSX.Element;
