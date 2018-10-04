const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const welcomeRouter = require('./routes/welcome')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static('public'))

app.use(welcomeRouter);


module.exports = app;