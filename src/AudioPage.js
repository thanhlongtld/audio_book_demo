import React, {Component} from "react";
import ReactAudioPlayer from "react-audio-player";
import ReactJkMusicPlayer from "react-jinke-music-player";
import 'react-jinke-music-player/assets/index.css'
import axios from "axios";

export default class AudioPage extends Component {

    // componentDidMount() {
    //     axios
    //         .get(`http://localhost:8000/audio`, {
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "Access-Control-Allow-Origin": "*"
    //
    //             }
    //         })
    //         .then((res) => {
    //             console.log(res)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }

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
                            "http://localhost:8000/audio",
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