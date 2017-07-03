import React, { Component } from 'react';
import axios from 'axios';
import sweetalert from 'sweetalert';

const Login = () => {
    const handleSubmit = event => {
        event.preventDefault();
        let user = {
            username: document.getElementById('login-username').value,
            password: document.getElementById('login-password').value
        }
        axios({
            url: '/api/user/get',
            method: "POST",
            cache: "false",
            data: user
        }).then(response => {
           if (response.status == 200 && sessionStorage.length === 0) {
               sessionStorage.setItem('userData', JSON.stringify(response.data))
           }
           else if (response.stats === 500 || response.status === 404) {
              sweetalert("Oops...", "Something went wrong!", "error");
              sessionStorage.clear();
              clearInputs();
           }
        }).catch(err => {
            sweetalert("Oops...", "Something went wrong!", "error");
            sessionStorage.clear();
            clearInputs();
        });
    }
    const clearInputs = () => {
        document.getElementById('login-username').value = '';
        document.getElementById('login-password').value = '';
    }
    return (
        <form className="form-control" onSubmit={handleSubmit}>
            <h2>Please Sign Up</h2>
            <div className="form-group">
                <input id="login-username" type="text" placeholder="Please enter your username"/>
                <input id="login-password" type="password" placeholder="Please enter your password"/>
            </div>
            <div>
                <button type="submit" className="btn btn-sm btn-primary">Submit</button>
            </div>
        </form>
    )
}

export default Login;
