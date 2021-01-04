import React, {Component} from "react"
import axios from "axios";
axios.defaults.withCredentials=true

export default class Logout extends Component{
    componentDidMount() {
        localStorage.clear()
        alert("You are logout")
        axios
            .get(`http://localhost:4000/auth/logout`,{
                'Content-Type':"application/json",
                withCredentials: true
            })
            .then((res)=>{
                this.props.history.push("/login")
            })
            .catch((err)=>{
                console.log(err)
            })

    }

    render() {
        return (<h1>Logged out</h1>)
    }
}