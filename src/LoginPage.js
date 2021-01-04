import React, {Component} from "react";
import axios from "axios";

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
                withCredentials:true
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
            <div>
                <h1>Login Page</h1>
                <form onSubmit={this.formOnSubmit}>
                    <label>Username</label>
                    <input name="username" type="text" onChange={this.inputOnChange} value={this.state.username}/>
                    <label>Password</label>
                    <input name="password" type="password" onChange={this.inputOnChange} value={this.state.password}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}