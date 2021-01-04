import React, {Component} from "react";
import './App.css';
import AudioPage from "./AudioPage";
import LoginPage from "./LoginPage";
import Logout from "./Logout";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path="/audio" render={(props) => <AudioPage {...props} />}/>
                        <Route exact path="/login" render={(props)=><LoginPage {...props} />}  />
                        <Route exact path="/logout" render={(props)=><Logout {...props} />} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

