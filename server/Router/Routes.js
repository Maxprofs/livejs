const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');
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
			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(newUser.password, salt, (err, hash) => {
					if (err) {
						throw err;
					}
					else {
						newUser.password = hash;
						newUser.save();
						res.json({success:true, message: "Successfully add new user", User: newUser})
					}
				})
			});
		}
	});
});

module.exports = router
