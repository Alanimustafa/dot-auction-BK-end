
// Connecting to the Database

const mongoose = require("mongoose"); // Requiring mongoose.

require("dotenv").config(); //Requiring dotenv.

// Creating a function to connect to the MongoDb.
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

// Exporting the function to the server.js
module.exports = connectDB;