const express = require('express');

//get mongoose to connect with mongodb from mlab
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');

//creates the server app
const app = express()


//db config
const db = require('./config/keys').mongoURI

//connect to mongodb through mongoose
//gets back an async promise!! AJAX
mongoose
    .connect(db)
    .then(() => console.log("MongoDB connected"))
    .catch((error) => console.log(error))





//route
app.get('/', (req,res) => res.send("Hello"))

//process.env.PORT for heroku
const port = process.env.PORT || 5000;

//run the server
app.listen(port, () => console.log(`Server running on port ${port}`))