const Mongoose = require('mongoose');
const db = 'mongodb+srv://admin:admin@cluster0.7fvb2.mongodb.net' +
    '/UserAuth?retryWrites=true&w=majority';

const connectDB = async () => {
    await Mongoose.connect(db);
    console.log("Database connection established!")
}

module.exports = connectDB;