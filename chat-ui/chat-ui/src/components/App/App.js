import React, {Component} from "react";
import WelcomePage from "../WelcomePage/WelcomePage";
import MainPage from "../MainPage/MainPage";
import {BrowserRouter, Route, Switch} from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <main>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={WelcomePage}/>
                        <Route exact path='/main' component={MainPage}/>
                    </Switch>
                </BrowserRouter>
            </main>
        );
    }
}

export default App;