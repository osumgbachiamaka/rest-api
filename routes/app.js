const express = require('express');
const bodyParser = require('body-parser');
const userRoute = require('./user');
const adminRoute = require('./admin');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static("./public"));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use('/v1/api/user', userRoute);
// app.use('/v1/api/admin', adminRoute);

module.exports = app;
