# Tlapali #

## Installation ##

    npm install @makechtec/tlapali @makechtec/tlapali_themes @makechtec/tlapali_langs

## Usage ##

    import { Code } from '@makechtec/tlapali';
    import { Makech } from '@makechtec/tlapali_themes';
    import { Java } from '@makechtec/tlapali_langs';

    export const App = () => {

        return(
            <Code theme={Makech} lang={Java}>
                public class App {
                    
                }
            </Code>
        );

    };