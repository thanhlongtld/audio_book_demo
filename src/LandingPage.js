import React, {Component} from "react";
import landingStyle from "./css/landing_page.module.css"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from "@fortawesome/free-solid-svg-icons";

import ButtonLight from "./ButtonLight";
import ButtonDark from "./ButtonDark";

import elip_landing from "./imgs/ellip_landing.png"
import podcast1 from "./imgs/podcast1.svg"

export default class LandingPage extends Component {
    state = {
        showMenu: false
    }
    toggleMenu = () => {
        if (this.state.showMenu) {
            this.setState({showMenu: false})
        } else {
            this.setState({showMenu: true})
        }
    }

    render() {
        return (
            <>
                <header className={landingStyle['l-header']}>
                    <nav>
                        <div className={landingStyle.logo}>
                            <a href="#"><h4>Logo</h4></a>
                        </div>
                        <ul className={`${landingStyle['nav-links']} ${this.state.showMenu ? landingStyle['show-menu'] : ""}`}>
                            <li><a className={landingStyle['active-link']} href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Discover</a></li>
                            <li><a href="#">Search</a></li>
                            <li><a href="#"><ButtonLight text="Login"/></a></li>
                        </ul>
                        <div className={landingStyle['nav-toggle']} id="nav-toggle" onClick={this.toggleMenu}>
                            <FontAwesomeIcon icon={faBars}/>
                        </div>
                    </nav>

                </header>
                <main className={landingStyle["l-main"]}>
                    <section className={landingStyle.home} id="home">
                        <div
                            className={`${landingStyle['home-container']}`}>
                            <div className={landingStyle['home-data']}>
                                <h2 className={landingStyle['home-slogan']}>A cool slogan for website</h2>
                                <span className={landingStyle['home-intro']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet quam magna, eu tempor tortor tristique eu. Sed ultricies justo in ipsum pulvinar, non malesuada est euismod. Morbi eu felis orci. Nam dictum et nisi ut tristique. </span>
                                <div className={landingStyle['home-button']}>
                                    <ButtonLight text="Login"/>
                                </div>
                            </div>
                            <div className={landingStyle['home-img']}>
                                <img src={podcast1}/>
                            </div>
                        </div>
                    </section>
                </main>
                <img src={elip_landing} className={landingStyle.bubble}/>
            </>
        )
    }
}