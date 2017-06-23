import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

//import components
import Navbar from './Navbar';
import Home from './Home';

const Routes = () => (
    <BrowserRouter>
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        </div>
    </BrowserRouter>
)

export default Routes;
