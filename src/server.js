const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const path = require('path')
const serveIndex = require('serve-index')
const routes = require('./api-routes');
const { default: mongoose } = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors');

mongoose.connect(process.env.MONGODB_CONNECT);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error!'));
db.on('open', () => {
    console.log("MongoDB is connected!");
    serverSaved()
});

app.use('/public', express.static(path.join(__dirname, '../public')));
app.use('/public', serveIndex(path.join(__dirname, '../public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use('/', routes);

const serverSaved = () => {
    app.listen(process.env.PORT, process.env.HOSTNAME, () => {
        console.log(`server at - http://${process.env.HOSTNAME}:${process.env.PORT}`);
    });
}