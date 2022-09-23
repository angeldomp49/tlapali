export declare class TagFactory {
    createStartTag(tagName: string, extraAttributes?: string): string;
    createEndTag(tagName: string): string;
    createStyleAttribute(style: string): string;
    encloseTextWithTag(text: string, tagName: string, extraAttributes?: string): string;
}
