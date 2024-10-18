const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("DB Connected");
    });

    await mongoose.connect(`${process.env.DATABASE_URI}/spotifyclone`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error("DB Connection Error:", error);
    process.exit(1); // Exit the process with failure code
  }
};

module.exports = connectDB;
