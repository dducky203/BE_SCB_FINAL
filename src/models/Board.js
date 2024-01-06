const mongoose = require('mongoose');
// const moment = require('moment');

const boardSchema = new mongoose.Schema({
    title: { type: String, required: true },
    cover: {type: String, required: true},
    dateCreated: { type: Date, default: Date.now()}
    
});

const Board = mongoose.model('Board', boardSchema);

module.exports = Board;
