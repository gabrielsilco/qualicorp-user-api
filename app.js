const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/user');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next();
})

app.use('/user', userRoutes)

mongoose.connect('mongodb://localhost:27017/qualicorp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(result => {
        app.listen(5005);
    })
    .catch(err => console.log(err))