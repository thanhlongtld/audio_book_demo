import React, {Component} from "react"
import "./css/user/login_register.css"
import rocket from "./imgs/rocket.svg"
import desk from "./imgs/desk.svg"


export default class AuthenticationContainer extends Component {
    render() {
        return (
            <div className={"container " + (this.props.isSignUp ? "sign-up-mode" : "")}>
                <div className="forms-container">
                    <div className="signin-signup">
                            {this.props.children}
                    </div>
                    <div className="panels-container">
                        <div className="panel left-panel">
                            <div className="content">
                                <h3>New here?</h3>
                                <p>Lorem sadsadassadsadsaklmdksand sajdnsajndn kjds jksd nsa dnsa dnsa d sa dsna dnsa
                                    dnsa djisanjd sakd
                                    sajd</p>
                                <button className="btn transparent" id="sign-up-btn"
                                        onClick={() => this.props.history.push("/register")}>
                                    Sign up
                                </button>
                            </div>
                            <img src={rocket} className="image"/>
                        </div>
                        <div className="panel right-panel">
                            <div className="content">
                                <h3>One of us?</h3>
                                <p>Lorem sadsadassadsadsaklmdksand sajdnsajndn kjds jksd nsa dnsa dnsa d sa dsna dnsa
                                    dnsa djisanjd sakd
                                    sajd</p>
                                <button className="btn transparent" id="sign-in-btn"
                                        onClick={() => this.props.history.push("/login")}>
                                    Sign in
                                </button>
                            </div>
                            <img src={desk} className="image"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}