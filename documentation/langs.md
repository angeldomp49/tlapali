# Langs #

You can define your own language object descriptor. In case of it's not defined in the __@makechtec/tlapali_langs__ list.

The language object descriptor contains a name to be identified, keywords list to be treated by the theme and rules list to specify special language pieces to be styled by the theme.

you should install:

    npm install --save tlapali_dev

Create your own language object and export it.

    export const Js: Lang = {
        name: "javascript",               
        keywords: [
            //...
        ],
        rules: [
            // ...
        ]
    }

The __name__ property identifies your language and it's used in the __Theme__ objects. can be anything but, it's recommended to use only numbers, letters and underscores.

The __keywords__ property is a list of keywords for the language. It's used if the consumer theme gives them special style.

The __rules__ property is a list of rules for the language. And each defines a name to be identified and a pattern,
this pattern should declare a __RegExp__ string with a mandatory __target__ named group, the match of this will be enclosed by
a tag with specific theme css styles.

For example, suppose we need to define a class declaration.

    rules: [
        // ...
        {
            name: 'class_declaration',
            pattern: 'class\\s*(?<target>[A-z]*)\\s*\\{'
        }
    ]

in this example, the piece enclosed in parentheses will be enclosed by an span tag with the specific theme css styles. but the rest of the regex is used to identify the occurrence.

    // input code

    class App {

    // output: 

    class <span style="..." >App</span> { 
