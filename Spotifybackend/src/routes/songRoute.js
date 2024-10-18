const { AddSong, ListSong } =  require("../controllers/songController");
const express = require('express');
const upload = require("../middeware/multer");


const songRouter = express.Router();

songRouter.post('/AddSong', upload.fields([{name:'image', maxCount:1}, {name: 'audio',maxCount:1}]), AddSong);
songRouter.get('/ListSong', ListSong);

module.exports =  songRouter;