import React, {Component} from "react";
import landingStyle from "./css/landing_page.module.css"

import ButtonLight from "./ButtonLight";

import elip_landing from "./imgs/ellip_landing.png"

export default class LandingPage extends Component {
    render() {
        return (
            <header>
                <nav>
                    <div className={landingStyle.logo}>
                        <h4>Logo</h4>
                    </div>
                    <ul className={landingStyle['nav-links']}>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#"><ButtonLight text="Login" /></a></li>
                    </ul>
                </nav>
                <img src={elip_landing} className={landingStyle.bubble} />
            </header>
        )
    }
}