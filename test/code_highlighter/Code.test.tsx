import React from 'react';
import {Code} from '../../src/code_highlighter/Code';
import renderer from 'react-test-renderer';
import { Theme, Lang } from '@makechtec/tlapali_dev';

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

test('testCodeRender', () => {
    const tree = renderer.create(
        <Code theme={exampleTheme} lang={exampleLang} >
            3 3
        </Code>
    )
    .toJSON();
    expect(tree).toMatchSnapshot();
    // const linkElement = screen.getByText('<span style="color: red;" >3</span> <span style="color: red;" >3</span>');
    // expect(linkElement).toBeInTheDocument();
  });