const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
    listTitle: { type: String, require: true },
    listCreationDate: { type: Date, default: Date.now() },
    location: { type: Number, required: true },
    boardId: { type: mongoose.Schema.Types.ObjectId, ref: 'Board' },
   //cardId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card'}]

});

const List = mongoose.model('List', listSchema);

module.exports = List;

