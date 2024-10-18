const { AddSong, ListSong } =  require("../controllers/songController");
const express = require('express');

const songRouter = express.Router();

songRouter.post('/AddSong', AddSong);
songRouter.get('/ListSong', ListSong);

module.exports =  songRouter;