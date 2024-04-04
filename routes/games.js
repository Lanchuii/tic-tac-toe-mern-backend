const express = require('express');
const Game = require('../models/GameModel')

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const games = await Game.find({}).sort({ createdAt: -1 })
    res.status(200).json(games);
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
});


router.post('/', async (req, res) => {
  const { player1, player2, score1, score2, winner } = req.body;
  try {
    const game = await Game.create({ player1, player2, score1, score2, winner });
    res.status(200).json(game)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const deletedGame = await Game.findByIdAndDelete(id);

    if (!deletedGame) {
      return res.status(404).json({ error: 'ID not found' });
    }

    res.status(201).send('Game deleted successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send({});
  }
});

module.exports = router;