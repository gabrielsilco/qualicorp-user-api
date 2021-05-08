const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next();
})

mongoose.connect('mongodb://localhost:27017/posts', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(result => {
        app.listen(8080);
    })
    .catch(err => console.log(err))