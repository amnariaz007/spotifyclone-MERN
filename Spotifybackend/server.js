const express = require('express');
const app = express();
require('dotenv').config(); 
const cors = require('cors');
const songRouter = require('./src/routes/songRoute')
const connectDB = require('./src/config/mongodb');
const connectCloudinary = require('./src/config/cloudinary');
const albumRouter = require('./src/routes/albumRoute');

//middlewares
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3000;
connectCloudinary();
connectDB();



//initialize songRoutes
app.use('/api/song/',songRouter);
app.use('/api/album', albumRouter)


app.listen(port, ()=> console.log(`server statred on port ${port}`));