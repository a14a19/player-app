const Players = require('../models/player.model');

const getPlayers = async (req, res) => {
    Players.find({}).exec((err, data) => {
        if (err) {
            return res.status(500).send({ msg: "Internal server error." })
        }
        res.status(200).send({ data: data })
    })
}

const getPlayer = (req, res) => {
    Players.findById(req.params.playerId, req.body, (err, data) => {
        if (err) {
            return res.status(500).send({ msg: "This user is not found" })
        };
        res.status(200).send({ data: data });
    });
};

// * to get single player, in client app, call a function then increase and decrease the skip() value to get different player in list.
const getOnePlayer = async (req, res) => {

    // * To get total count of element present in DB
    const totalRecords = await Players.countDocuments();
    Players.find({}).skip(req.query.skip).limit(req.query.limit).exec((err, data) => {
        if (err) {
            return res.status(500).send({ msg: "Internal server error." })
        }
        res.status(200).send({ data: data, totalCount: totalRecords })
    })
}

// const createPlayer = async (req, res) => {
//     const player = new Players(req.body);
//     player.save((err, player) => {
//         if (err) {
//             return res.status(500).send({ error: "Unable to create new player, Please try again." });
//         }
//         res.status(201).send(player);
//     });
// }

const createPlayer = async (req, res) => {
    const player = new Players(req.body);
    player.save((err, player) => {
        if (err) {
            return res.status(500).send({ error: 'Internal Server Error' });
        }
        res.status(201).send(player);
    })

}

const deletePlayer = (req, res) => {
    Players.findByIdAndDelete(req.params.playerId, (err, data) => {
        if (err) {
            return res.status(500).send({ msg: "The player can't be deleted." })
        }
        res.status(200).send({ msg: `${data.playerName} Deleted succesfully!` })
    })
}

module.exports = {
    getPlayers,
    getPlayer,
    createPlayer,
    deletePlayer,
    getOnePlayer
};