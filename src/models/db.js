const Mongoose = require('mongoose');
require('dotenv').config();
const db = process.env.MONGO_URI;

import { User } from './User';
import { Messge } from './Message';

const connectDB = async () => {
    await Mongoose.connect(db);
    console.log("Database connection established!")
}
const models = { User, Message };

export default models;
module.exports = connectDB;