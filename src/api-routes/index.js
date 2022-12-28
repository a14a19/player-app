const routes = require('express').Router();
const PlayerRoute = require('./player.routes');

routes.get('/', (req, res) => {
    res.send({msg: "Welcome to Players app"});
});

routes.use('/players', PlayerRoute);

module.exports = routes;