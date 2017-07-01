const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.post('/user/add', (req, res) => {
	let newUser = new User({
		name: req.body.name,
		email: req.body.email,
		username: req.body.username,
		password: req.body.password
	});

	User.addUser(newUser, err => {
		if (err) {
			res.json({ success:false, message: "Failed to add new user" })
		}
		else {
			res.json({success:true, message: "Successfully add new user", User: newUser})
		}
	});
});

router.post('/user/get', (req, res) => {
	let username = req.body.username;
    let userPassword = req.body.password;
    let query = {username: username};

    User.findOne(query).then((user)=> {
		if(!user) {
			return res.status(404).send('error please re-enter credentials');
		}

		let isVerrified = bcrypt.compareSync(userPassword, user.password);
		if (isVerrified) {
			let token = jwt.sign(user, process.env.SECRET_KEY);
			res.status(200).json({success: true, token: token});
		}
		else {
			res.status(400).send('wrong password dumbass');			
		}
	});
})

module.exports = router
