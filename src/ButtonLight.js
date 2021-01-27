import React,{Component} from "react";
import buttonStyle from "./css/button.module.css"
import buttonLight from "./css/button.light.module.css"
export default class ButtonLight extends Component{
    render() {
        return(
            <button className={`${buttonStyle.btn} ${buttonLight['btn-light']}`}>{this.props.text}</button>
        )
    }
}