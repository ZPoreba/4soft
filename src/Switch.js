import {Switch, Route} from "react-router-dom";
import React, { Component } from "react";
import Home from "./components/Home";

export default class MainSwitch extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={'/home'} component={Home}/>
                <Route exact path={'/'} component={Home}/>
            </Switch>
        )
    }
}
