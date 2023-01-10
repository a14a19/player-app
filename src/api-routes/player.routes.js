const playerRoute = require('express').Router();
const { getPlayers, getOnePlayer, getPlayer, createPlayer, deletePlayer } = require('../controllers/player.controllers');
const { validateCreatePlayer, validateGetPlayer } = require('../validators/player.validators')

playerRoute.get('/', getPlayers);
playerRoute.get('/player', validateGetPlayer, getOnePlayer);
playerRoute.get('/:playerId', getPlayer);
playerRoute.post('/', validateCreatePlayer, createPlayer);
playerRoute.delete('/:playerId', deletePlayer);

module.exports = playerRoute;