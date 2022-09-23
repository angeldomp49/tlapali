import { Theme, Lang } from '@makechtec/tlapali_dev';
import React from 'react';
import {Code} from './code_highlighter/Code';

export const App = () => {

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

    return(
        <Code theme={exampleTheme} lang={exampleLang} >
            3 3
        </Code>
    );

};