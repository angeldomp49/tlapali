# Themes #

## Available themes ##

By default there is already a list of themes available in the tlapali_dev package.

- Makech

## Custom themes ##

You can create your own themes exporting them.

Install:

    npm install --save-dev @makechtec/tlapali_dev

create a custom object an export it, this object should be of type Theme:

    //in index.ts file

    import { Theme } from "@makechtec/tlapali_dev";

    export const CustomTheme: Theme = {
        // description
    };

The theme structure is:

    export type Theme = {
        name: "name_of_your_theme",
        supportedLaguages: [
            {
                name: "java";
                styleSets : [
                    {
                        rule: "name_of_the_rule";
                        styles: [
                            "font-size: 12px",
                            "font-weight: bold",
                            "color: #000000",
                        ]
                    }
                ]
            }
        ]
    }

the __name__ property is the name of the theme.

the __supportedLaguages__ property is the list of supportedLaguages that the theme defines.

inside each __supportedLanguage__ property, it have a name, when you use the React __Code__ component you need to
pass a __Lang__ object, this should have the same __name__ defined here.

For example, if you want to style the __Java__ object declared in __@makechtec/tlapali_langs__, as his name is __"java"__ then 
in your theme, you append a __supportedLanguage__ object and the name is also "java".

If you want to use a custom __Lang__ object, you should match the name.

    import { Theme, Lang } from "@makechtec/tlapali_dev";

    export const Cobol: Lang = {
        name: "cobol",               // <----------------- this line 
        keywords: [
            //...
        ],
        rules: [
            //...
        ]
    }

    export const CustomTheme: Theme = {
        name: "custom_theme",
        supportedLaguages: [
            {
                "name": "cobol",    // <----------------- this line 
                //...
            }
        ]
    }

    export const App = () => {
        return(
            <Code theme={CustomTheme} lang={Cobol}>
                // code ...
            </Code>
        );
    }

As the same way, each __StyleSet__ object define a __rule__ property, it needs to match with the __Rule__ -> name property in the __Lang__ object.

    export const Js: Lang = {
        name: "javascript",               
        keywords: [
            //...
        ],
        rules: [
            name: "variable_declaration"         // <----------------- this line 
        ]
    }

    export const CustomTheme: Theme = {
        name: "custom_theme",
        supportedLaguages: [
            {
                name: "javascript",    
                styleSets: [
                    rule: "variable_declaration" // <----------------- this line
                    styles: [
                        //  ...
                    ]
                ]
            }
        ]
    }

Finallly you can use the styles array property to define each style in plain css, at the end all this lines will be concatenated together, but it helps you to be clear.

    styles:[
        'color: red;',
        'font-size: 12px;',
        // ...
    ]