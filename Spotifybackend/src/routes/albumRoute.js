const express = require('express');
const upload = require("../middeware/multer");
const {addAlbum, listAlbum, deleteAlbum } = require('../controllers/albumController');


const albumRouter = express.Router();

albumRouter.post('/addAlbum', upload.fields([{name:'image', maxCount:1}]), addAlbum);
albumRouter.get('/listAlbum', listAlbum);
albumRouter.post('/deleteAlbum', deleteAlbum);


module.exports = albumRouter;

