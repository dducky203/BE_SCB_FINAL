const express = require('express');
var bodyParser = require('body-parser');
require('dotenv').config();


const app = express();
const port = 8683;
const api_v1 = require('./routes/v1/index.js');
const errorHandle = require('./middlewares/errorHandle.js')
const db = require('./configs/mongodb');

//Ket noi voi Database
db.connect();


app.get('/', (req, res) => {
    res.send(`<h1>
    Finish SCB course. Now, I'm ready for a new journey.</h1>`);
});

//Sử dụng app.use để định nghĩa route
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/v1', api_v1);
app.use(errorHandle);





app.listen(port, () => {
    console.log(`Sever is running at http://localhost:${port}`);
});
