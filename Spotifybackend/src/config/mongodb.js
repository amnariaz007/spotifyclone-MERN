const mongoose = require('mongoose');


const connectDB = async () => {

    mongoose.connect.on("connected", ()=>{
        console.log("DB Connected");
    })

  await mongoose.connect(`${process.env.DATABASE_URI}/spotifyclone`)
    
      
}

module.exports = mongoose.connectDB;