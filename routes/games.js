const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ msg: 'GET all games' });
});

router.get('/:id', (req, res) => {
  res.json({ msg: 'GET a single game' });
});

router.post('/', (req, res) => {
  res.json({ msg: 'POST a game' });
});

router.delete('/', (req, res) => {
  res.json({ msg: 'DELETE a single game' });
});

module.exports = router;