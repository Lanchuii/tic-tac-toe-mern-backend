require('dotenv').config()

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const gameRoutes = require('./routes/games');

const app = express();

app.use(express.json());
app.use(cors())

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(gameRoutes)

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('listening on port', process.env.PORT)
    });
  })
  .catch((error) => {
    console.log(error);
  })