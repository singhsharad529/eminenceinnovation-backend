const mongoose = require("mongoose");

/*
  - connectDB is database connection function
  - It asked for MONGO_URI with username and password
  - Username and password are already embeded into MONGo_URI 
  - MONGO_URI value present inside our .env file
*/

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongo db connected");
  } catch (error) {
    console.log("Error : ", error.message);
    process.exit();
  }
};

module.exports = connectDB;
