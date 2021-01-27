import React, {Component} from "react";
import './css/index.css';
import AudioPage from "./AudioPage";
import LoginPage from "./LoginPage";
import Logout from "./Logout";
import Register from "./Register";
import LandingPage from "./LandingPage";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {CSSTransition, TransitionGroup} from "react-transition-group";
import "./css/animation.css"

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Route render={({location}) => (
                        <TransitionGroup>
                            <CSSTransition
                                key={location.key}
                                timeout={5000000}
                                classNames='fade'
                            >
                                <Switch>
                                    <Route exact path="/login"
                                           render={(props) => <LoginPage {...props} isSignUp={false}/>}/>
                                    <Route exact path="/register"
                                           render={(props) => <Register {...props} isSignUp={true}/>}/>
                                    <Route exact path="/" render={(props) => <LandingPage {...props} />}/>
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    )}/>

                    <Switch>
                        <Route exact path="/logout" render={(props) => <Logout {...props} isSignUp={true}/>}/>

                        <Route exact path="/audio" render={(props) => <AudioPage {...props} />}/>
                    </Switch>
                </Router>
            </div>
        )
            ;
    }
}

