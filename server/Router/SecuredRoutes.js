const express = require('express');
const securedRouter = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');

// const multipart = require('connect-multiparty');
// const multipartMiddleWare = multipart({uploadDir: './server/Uploads' });

securedRouter.post('/upload', (req, res) => {
    console.log(req.files)
});

module.exports = securedRouter;