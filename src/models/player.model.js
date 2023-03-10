const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema ({
    playName: String,
    playerTeam: String,
    playerCountry: String,
    totalMatch: Number,
    trophy: Number,
    dateOfBirth: Date,
    image: String
});

module.exports = mongoose.model('Players', PlayerSchema);