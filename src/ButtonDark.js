import React,{Component} from "react";
export default class ButtonDark extends Component{
    render() {
        return(
            <button>{this.props.text}</button>
        )
    }
}