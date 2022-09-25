import { Stylist } from "../src/Stylist";
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

test('testConvert', () => {

    const exampleLang: Lang = {
        name: 'exampleLang',
        keywords: [
            'public'
        ],
        rules: [
            {
                name: 'numbers',
                pattern: '(?<target>[0-9])'
            }
        ]
    };

    const stylist: Stylist = new Stylist(exampleTheme, exampleLang);
    let result = stylist.convert('3 3');

    expect(result).toBe('<span style="color: red;" >3</span> <span style="color: red;" >3</span>');
  });

test('testConvertGroup', () => {

    const exampleLang: Lang = {
        name: 'exampleLang',
        keywords: [
            'public'
        ],
        rules: [
            {
                name: 'numbers',
                pattern: 'class\\s*(?<target>[A-z]*)\\s*\\{'
            }
        ]
    };

    const stylist: Stylist = new Stylist(exampleTheme, exampleLang);
    let result = stylist.convert('class App {');

    expect(result).toBe('class <span style="color: red;" >App</span> {');
  });
