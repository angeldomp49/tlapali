
export class Formatter{

    format(text: string): string{
        let newText = text;

        specialCharacters.forEach( specialChar => {

            const expression = new RegExp(specialChar[0], "g");
            newText = newText.replace(expression, specialChar[1]);
        } );

        return newText;
    }

}

const specialCharacters: Array<Array<any>> = [
    [
        "\\n",
        "<br/>"
    ],
    [
        "\\s{4}",
        "&nbsp;&nbsp;"
    ]
];