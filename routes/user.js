const express = require('express');
const userCtrl = require('../controllers/userCtrl')

const route = express.Router();

route.get('/create/', userCtrl);

module.exports = route;