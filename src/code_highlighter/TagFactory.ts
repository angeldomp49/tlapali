
export class TagFactory{

    createStartTag(tagName:string, extraAttributes: string = ''):string {

        if(extraAttributes == ''){
            return '<' + tagName + '>';
        }

        return '<' + tagName + ' '+ extraAttributes +' ' + '>';
    }

    createEndTag(tagName:string):string {
        return '</' + tagName + '>';
    }

    createStyleAttribute(style: string): string{
        return 'style="' + style + '"';
    }

    encloseTextWithTag(text: string, tagName: string, extraAttributes: string = ''):string{
        return this.createStartTag(tagName, extraAttributes) + text + this.createEndTag(tagName);
    }

}