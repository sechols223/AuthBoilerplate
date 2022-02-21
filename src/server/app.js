const express = require('express');
const http = require('http');
const path = require('path');
const connectDB = require('./db');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'routes')))
app.use(express.static(path.join(__dirname, 'models')))

connectDB();
http.createServer(app)

app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
    }
    console.log('Server started listening on Port:', PORT);
})

module.exports = app;