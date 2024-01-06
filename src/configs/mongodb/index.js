//Tao ket noi den DB: Mongo cloud

const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(
            'mongodb+srv://lnd2003:ngocduong03@cluster0.1hlhhbl.mongodb.net/trello?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log('Database - Connect successfully !!!');
    } catch (error) {
        console.log('Database - Connect failure!!!');
    }
}

module.exports = { connect };