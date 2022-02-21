const Mongoose = require('mongoose');
require('dotenv').config();
const db = process.env.MONGO_URI;
const connectDB = async () => {
    await Mongoose.connect(db);
    console.log("Database connection established!")
}

module.exports = connectDB;