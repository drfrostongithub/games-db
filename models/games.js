const mongoose = require('mongoose');

const GameList = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    release_date: {
        type: Date,
        required: true,
        default: Date.now
    },
    platform: {
        type: String,
        required: true
    },
    ratings : {
        type: Number, 
        required: true
    },
});

module.exports = mongoose.model("GameList", GameList);