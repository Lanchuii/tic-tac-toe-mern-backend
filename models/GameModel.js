const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gameDataSchema = new Schema(
  {
    player1: { type: String, required: true },
    player2: { type: String, required: true },
    score1: { type: Number, required: true },
    score2: { type: Number, required: true },
    winner: { type: String, required: true },
  }, { timestamps: true }
)

module.exports = mongoose.model('Game_Data', gameDataSchema)