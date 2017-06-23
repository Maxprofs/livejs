import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
    const login = () => {
        console.log('testing log in')
    }
    const signup = () => {
        console.log('testing signup click')
    }
    return(
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Twitch-Clone</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Browser <span className="sr-only">(current)</span></a></li>
                <li><a href="#">Try Prime</a></li>
              </ul>
              <form className="navbar-form navbar-left">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Search"/>
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
              </form>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#" onClick={login}>Log in</a></li>
                <li><a href="#" onClick={signup}>Sign up</a></li>
              </ul>
            </div>
          </div>
        </nav>
    )
}

export default Navbar;
