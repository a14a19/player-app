const routes = require('express').Router();
const playerRoute = require('./player.routes');

routes.get('/', (req, res) => {
    res.send({msg: "Welcome to Players app"});
});

routes.use('/players', playerRoute);

module.exports = routes;