import React, {Component} from "react"
import AuthenticationContainer from "./AuthenticationContainer";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faEnvelope, faLock} from "@fortawesome/free-solid-svg-icons";
import {faFacebookF, faTwitter, faLinkedin, faGoogle} from "@fortawesome/free-brands-svg-icons";
import authStyle from  "./css/user/login_register.module.css"

export default class Register extends Component {
    render() {
        return (
            <AuthenticationContainer isSignUp={this.props.isSignUp} history={this.props.history}>
                <form action="" className={authStyle['sign-up-form']}>
                    <h2 className={authStyle.title}>Sign up</h2>
                    <div className={authStyle['input-field']}>
                        <i>
                            <FontAwesomeIcon icon={faUser}/>
                        </i>
                        <input type="text" placeholder="Username"/>
                    </div>
                    <div className={authStyle['input-field']}>
                        <i>
                            <FontAwesomeIcon icon={faEnvelope}/>
                        </i>
                        <input type="text" placeholder="Email"/>
                    </div>
                    <div className={authStyle['input-field']}>
                        <i>
                            <FontAwesomeIcon icon={faLock}/>
                        </i>
                        <input type="password" placeholder="Password"/>
                    </div>
                    <input type="submit" value="Sign up" className={`${authStyle.btn} ${authStyle.solid}`}/>
                    <p className={authStyle['social-text']}>Or Sign up with social platforms</p>
                    <div className={authStyle['social-media']}>
                        <a href="#" className={authStyle['social-icon']}>
                            <i>
                                <FontAwesomeIcon icon={faFacebookF}/>
                            </i>
                        </a>
                        <a href="#" className={authStyle['social-icon']}>
                            <i>
                                <FontAwesomeIcon icon={faTwitter}/>
                            </i>
                        </a>
                        <a href="#" className={authStyle['social-icon']}>
                            <i>
                                <FontAwesomeIcon icon={faGoogle}/>
                            </i>
                        </a>
                        <a href="#" className={authStyle['social-icon']}>
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