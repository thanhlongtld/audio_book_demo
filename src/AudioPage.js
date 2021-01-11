import React, {Component} from "react";
import ReactAudioPlayer from "react-audio-player";
import ReactJkMusicPlayer from "react-jinke-music-player";
import 'react-jinke-music-player/assets/index.css'
import axios from "axios";

axios.defaults.withCredentials = true

export default class AudioPage extends Component {
    state = {
        audioToken: ""
    }

    componentDidMount() {
        const accessToken = localStorage.getItem("accessToken")
        if (!accessToken) {
            alert("Login Require")
            this.props.history.push("/login");
        }
        axios
            .get(`http://localhost:8000/users/test_token`, {
                headers: {
                    'Authorization': `JWT ${accessToken}`,
                    'Content-Type': "application/json",
                    withCredentials: true
                }
            })
            .then((res) => {
                if (res.data.newAccessToken) {
                    localStorage.setItem("accessToken", res.data.newAccessToken)
                }
            })
            .catch((err) => {
                this.props.history.push("/logout")
                console.log(err)
            })
        axios
            .get(`http://localhost:8000/audio/gen_token/test.mp3`, {
                headers: {
                    'Authorization': `JWT ${accessToken}`,
                    'Content-Type': "application/json",
                    withCredentials: true
                }
            })
            .then((res) => {
                if (res.data.audioToken) {
                    this.setState({
                        audioToken: res.data.audioToken
                    })
                } else {
                    alert("Cant find path")
                }
            })
            .catch((err) => {
                alert("Cant find path")
            })
    }

    render() {
        return (
            <div>
                <a href={process.env.PUBLIC_URL + "/audio/music.m3u"}>Click</a>
                <ReactJkMusicPlayer
                    audioLists={[{
                        name: 'Test Audio Streaming',
                        singer: 'Long Do',
                        cover:
                            'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
                        musicSrc:
                            `http://localhost:8000/audio/${this.state.audioToken}`,
                        // support async fetch music src. eg.
                        // musicSrc: async () => {
                        //   return await fetch('/api')
                        // },
                    },]}
                    theme="dark"
                />
            </div>
        )
    }
}