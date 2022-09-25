import { Formatter } from '../src/Formatter';

test("testFormatterFormat", () => {
    let formatter = new Formatter();

    let exampleCode = `
        public class App {
            private String name;

            public static void main(String args[]){

            }
        }
    `;

    let result = formatter.format(exampleCode);

    let expected = "<br/>&nbsp;&nbsp;&nbsp;&nbsp;public class App {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;private String name;<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public static void main(String args[]){<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;"

    expect(result).toBe(expected);

});