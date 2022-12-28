const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const routes = require('./api-routes');
const { default: mongoose } = require('mongoose');
const cors = require('cors');

// ! Please connect the mongoDB by entering the password and username in .env file, then only mongoDB will work.
mongoose.connect(process.env.MONGODB_CONNECT);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error!'));
db.on('open', () => {
    console.log("MongoDB is connected!");
});

app.use(cors());

app.use('/', routes);

app.listen(process.env.PORT, process.env.LOCAL_NAME, () => {
    console.log(`server at - http://${process.env.LOCAL_NAME}:${process.env.PORT}`);
});