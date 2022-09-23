import { Lang, Theme } from "@makechtec/tlapali_dev";
import React from "react";
import { Translator } from "./Translator";

export const Code = (props: {theme: Theme, lang: Lang,children: any}) => {

    let translator: Translator = new Translator(props.theme, props.lang);
    let plainHTML = translator.convert(props.children);

    return(
        <div dangerouslySetInnerHTML={{__html:plainHTML}} ></div>
    );

};
