import React, {Component} from "react";
import axios from "axios";

import JsFileDownloader from "js-file-downloader"

const download = require("downloadjs")

export default class DownloadPage extends Component {
    downloadOnClick = () => {
        // axios
        //     .get(`http://localhost:9000/download`)
        //     .then(async (res) => {
        //         console.log(res)
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })
        let win=window.open("http://localhost:9000/download")
        win.focus()
    }

    render() {
        return <button onClick={() => this.downloadOnClick()}>Download</button>
    }
}