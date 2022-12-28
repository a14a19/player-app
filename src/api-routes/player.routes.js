const PlayerRoute = require('express').Router();
const { getPlayers, getOnePlayer, getPlayer, createPlayer, deletePlayer } = require('../controllers/player.controllers');

PlayerRoute.get('/', getPlayers);
PlayerRoute.get('/player', getOnePlayer);
PlayerRoute.get('/:playerId', getPlayer);
PlayerRoute.post('/', createPlayer);
PlayerRoute.delete('/:playerId', deletePlayer);

module.exports = PlayerRoute;