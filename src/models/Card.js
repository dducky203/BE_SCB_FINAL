const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    cardTitle: { type: String, required: true },
    describe: { type: String },
    member: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Account' }],
    dueDate: { type: Date },
    cardCover: { type : String },
    attachment: [{ type : String }],
    listId: { type: mongoose.Schema.Types.ObjectId, ref: 'List' }
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;