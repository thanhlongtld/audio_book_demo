import React, {Component} from "react"
import authStyle from "./css/user/login_register.module.css"
import rocket from "./imgs/rocket.svg"
import desk from "./imgs/desk.svg"


export default class AuthenticationContainer extends Component {
    render() {
        return (
            <div className={`${authStyle.container} ${this.props.isSignUp ? authStyle['sign-up-mode'] : ""}`}>
                <div className={authStyle['forms-container']}>
                    <div className={authStyle['signin-signup']}>
                            {this.props.children}
                    </div>
                    <div className={authStyle['panels-container']}>
                        <div className={`${authStyle.panel} ${authStyle['left-panel']}`}>
                            <div className={authStyle.content}>
                                <h3>New here?</h3>
                                <p>Lorem sadsadassadsadsaklmdksand sajdnsajndn kjds jksd nsa dnsa dnsa d sa dsna dnsa
                                    dnsa djisanjd sakd
                                    sajd</p>
                                <button className={`${authStyle.btn} ${authStyle.transparent}`} id="sign-up-btn"
                                        onClick={() => this.props.history.push("/register")}>
                                    Sign up
                                </button>
                            </div>
                            <img src={rocket} className={authStyle.image}/>
                        </div>
                        <div className={`${authStyle.panel} ${authStyle['right-panel']}`}>
                            <div className={authStyle.content}>
                                <h3>One of us?</h3>
                                <p>Lorem sadsadassadsadsaklmdksand sajdnsajndn kjds jksd nsa dnsa dnsa d sa dsna dnsa
                                    dnsa djisanjd sakd
                                    sajd</p>
                                <button className={`${authStyle.btn} ${authStyle.transparent}`} id="sign-in-btn"
                                        onClick={() => this.props.history.push("/login")}>
                                    Sign in
                                </button>
                            </div>
                            <img src={desk} className={authStyle.image}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}