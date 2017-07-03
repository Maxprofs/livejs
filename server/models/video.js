const mongoose = require('mongoose');
const config = require('../config/config');

const VideoSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    videoPath: {
        type: String,
        required: true
    },
    videoName: {
        type: String,
        required: true
    }
});

const Video = mongoose.model('Video', VideoSchema);

module.exports = Video;