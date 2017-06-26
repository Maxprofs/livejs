import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

//import components
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';

const Routes = () => (
    <BrowserRouter>
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default Routes;
