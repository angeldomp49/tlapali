import { Lang, Theme } from "@makechtec/tlapali_dev";
import React from "react";
import { Stylist } from "./Stylist";
import { Formatter } from "./Formatter";

export const Code = (props: {theme: Theme, lang: Lang, children?: any}) => {

    let formatter: Formatter = new Formatter();
    let stylist: Stylist = new Stylist(props.theme, props.lang);


    let plainHTML = stylist.convert(props.children);
    plainHTML = formatter.format(plainHTML);

    return(
        <div dangerouslySetInnerHTML={{__html:plainHTML}} ></div>
    );

};
