import {TagFactory} from '../../src/code_highlighter/TagFactory';

const tagFactory: TagFactory = new TagFactory();

test('testCreateStartTag', () => {

    let result = tagFactory.createStartTag('div');

    expect(result).toBe('<div>');
  });

test('testCreateStyleAttribute', () => {

    let result = tagFactory.createStyleAttribute('color: red;');

    expect(result).toBe('style="color: red;"');
  });

test('testCreateStartTagExtraAttributes', () => {

    let result = tagFactory.createStartTag('div', 'disabled');

    expect(result).toBe('<div disabled >');
  });

test('testCreateEndTag', () => {

    let result = tagFactory.createEndTag('div');

    expect(result).toBe('</div>');
  });

test('testEncloseWithTag', () => {

    let result = tagFactory.encloseTextWithTag('hello world', 'div');

    expect(result).toBe('<div>hello world</div>');
  });

test('testEncloseWithTagExtraAttributes', () => {

    let result = tagFactory.encloseTextWithTag('hello world', 'div', 'disabled');

    expect(result).toBe('<div disabled >hello world</div>');
  });