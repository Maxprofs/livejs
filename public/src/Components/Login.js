import React, { Component } from 'react';
import axios from 'axios';

const Login = () => {
    const handleSubmit = event => {
        event.preventDefault();
    }
    return (
        <form className="form-control" onSubmit={handleSubmit}>
            <h2>Please Log In</h2>
            <div className="form-group">
                <label className="form-control">User Name</label>
                <input type="text" ref="userName" placeholder="Please enter your user name"/>
            </div>
        </form>
    )
}

export default Login;
