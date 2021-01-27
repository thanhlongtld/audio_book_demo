import React,{Component} from "react";

import buttonStyle from "./css/button.module.css"
import buttonDark from "./css/button.dark.module.css"

export default class ButtonDark extends Component{
    render() {
        return(
            <button className={`${buttonStyle.btn} ${buttonDark['btn-dark']}`}>{this.props.text}</button>
        )
    }
}