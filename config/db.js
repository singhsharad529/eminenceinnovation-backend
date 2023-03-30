const mongoose = require("mongoose");

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
