const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');

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

module.exports = router
