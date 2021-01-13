import React, {Component} from "react"
import AuthenticationContainer from "./AuthenticationContainer";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faEnvelope, faLock} from "@fortawesome/free-solid-svg-icons";
import {faFacebookF, faTwitter, faLinkedin, faGoogle} from "@fortawesome/free-brands-svg-icons";

export default class Register extends Component {
    render() {
        return (
            <AuthenticationContainer isSignUp={this.props.isSignUp} history={this.props.history}>
                <form action="" className="sign-up-form">
                    <h2 className="title">Sign up</h2>
                    <div className="input-field">
                        <i>
                            <FontAwesomeIcon icon={faUser}/>
                        </i>
                        <input type="text" placeholder="Username"/>
                    </div>
                    <div className="input-field">
                        <i>
                            <FontAwesomeIcon icon={faEnvelope}/>
                        </i>
                        <input type="text" placeholder="Email"/>
                    </div>
                    <div className="input-field">
                        <i>
                            <FontAwesomeIcon icon={faLock}/>
                        </i>
                        <input type="password" placeholder="Password"/>
                    </div>
                    <input type="submit" value="Sign up" className="btn solid"/>
                    <p className="social-text">Or Sign up with social platforms</p>
                    <div className="social-media">
                        <a href="#" className="social-icon">
                            <i>
                                <FontAwesomeIcon icon={faFacebookF}/>
                            </i>
                        </a>
                        <a href="#" className="social-icon">
                            <i>
                                <FontAwesomeIcon icon={faTwitter}/>
                            </i>
                        </a>
                        <a href="#" className="social-icon">
                            <i>
                                <FontAwesomeIcon icon={faGoogle}/>
                            </i>
                        </a>
                        <a href="#" className="social-icon">
                            <i>
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </i>
                        </a>
                    </div>
                </form>
            </AuthenticationContainer>
        )
    }
}