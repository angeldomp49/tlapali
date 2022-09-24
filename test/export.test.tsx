import {Code} from '../index';
import renderer from 'react-test-renderer';
import { Lang, Theme } from '@makechtec/tlapali_dev';
import React from 'react';

test('testCode', () => {

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
              pattern: 'class\\s*(?<target>[A-z]*)\\s*\\{'
          }
      ]
  };

  const component = renderer.create(
      <Code theme={exampleTheme} lang={exampleLang}>
          {`
              public class App {
                  private static String name;
              }
          `}
      </Code>
  );

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});