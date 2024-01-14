const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema({
    title: { type: String, required: true },
    cover: { type: String, required: true },
    daterCeated: { type: Date, default: Date.now() },
   // lists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'List' }],
   // cards: [{type: mongoose.Schema.Types.ObjectId, ref: 'Card'}]

});

const Board = mongoose.model('Board', boardSchema);

module.exports = Board;
