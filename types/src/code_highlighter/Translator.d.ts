import { Lang, Theme } from "@makechtec/tlapali_dev";
import { TagFactory } from "./TagFactory";
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
