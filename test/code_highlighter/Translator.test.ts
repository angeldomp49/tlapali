import { Translator } from "../../src/code_highlighter/Translator";
import { Lang, Theme } from "@makechtec/tlapali_dev";

const exampleTheme: Theme = {
    name: 'exampleTheme',
    supportedLaguages: [
        {
            name: 'exampleLang',
            styleSets: [
                {
                    rule: 'numbers',
                    styles: [
                        'color: red;'
                    ]
                }
            ]
        }
    ]
};

const exampleLang: Lang = {
    name: 'exampleLang',
    keywords: [
        'public'
    ],
    rules: [
        {
            name: 'numbers',
            pattern: '[0-9]'
        }
    ]
};



test('testConvert', () => {
    const translator: Translator = new Translator(exampleTheme, exampleLang);
    let result = translator.convert('3 3');

    expect(result).toBe('<span style="color: red;" >3</span> <span style="color: red;" >3</span>');
  });
