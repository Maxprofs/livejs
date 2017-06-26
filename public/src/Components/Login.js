import React, { Component } from 'react';
import axios from 'axios';

const Login = () => {
    const handleSubmit = event => {
        event.preventDefault();
        let newUser = {
            name: document.getElementById('login-name').value,
            email: document.getElementById('login-email').value,
            username: document.getElementById('login-username').value,
            password: document.getElementById('login-password').value
        }
        axios({
            url: '/api/user/add',
            method: "POST",
            cache: "false",
            data: newUser
        }).then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err)
        });
    }
    return (
        <form className="form-control" onSubmit={handleSubmit}>
            <h2>Please Sign Up</h2>
            <div className="form-group">
                <input id="login-name" type="text" placeholder="Please enter your name"/>
                <input id="login-email" type="text" placeholder="Please email"/>
                <input id="login-username" type="text" placeholder="Please enter your user name"/>
                <input id="login-password" type="password" placeholder="Please enter your password"/>
            </div>
            <div>
                <button type="submit" className="btn btn-sm btn-primary">Submit</button>
            </div>
        </form>
    )
}

export default Login;
