import React, {Component} from "react";
import axios from "axios";
import AuthenticationContainer from "./AuthenticationContainer";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faLock} from "@fortawesome/free-solid-svg-icons";
import {faFacebookF, faTwitter, faGoogle, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import authStyle from "./css/user/login_register.module.css"
axios.defaults.withCredentials = true

export default class LoginPage extends Component {
    state = {
        username: "",
        password: ""
    }
    formOnSubmit = (e) => {
        e.preventDefault()
        axios
            .post(`http://localhost:4000/auth/login`, {
                username: this.state.username,
                password: this.state.password
            }, {
                headers: {
                    'Content-type': "application/json"
                },
                withCredentials: true
            })
            .then((res) => {
                let accessToken = res.data.accessToken
                localStorage.setItem("accessToken", accessToken)
                this.props.history.push("/audio")
            })
            .catch((err) => {
                console.log(err)
            })

    }
    inputOnChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({[name]: value})
    }

    render() {
        return (
            <AuthenticationContainer isSignUp={this.props.isSignUp} history={this.props.history}>
                <form action="" className={authStyle['sign-in-form']} onSubmit={this.formOnSubmit}>
                    <h2 className={authStyle.title}>Sign in</h2>
                    <div className={authStyle['input-field']}>
                        <i>
                            <FontAwesomeIcon icon={faUser}/>
                        </i>
                        <input type="text" placeholder="Username" name="username" onChange={this.inputOnChange}
                               value={this.state.username}/>
                    </div>
                    <div className={authStyle['input-field']}>
                        <i>
                            <FontAwesomeIcon icon={faLock}/>
                        </i>
                        <input type="password" placeholder="Password" name="password" onChange={this.inputOnChange}
                               value={this.state.password}/>
                    </div>
                    <input type="submit" value="Login" className={`${authStyle.btn} ${authStyle.solid}`} />
                    <p className={authStyle['social-text']}>Or Sign in with social platforms</p>
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