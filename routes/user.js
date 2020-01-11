const express = require('express');
const userCtrl = require('../controllers/userCtrl')

const route = express.Router();

route.post('/create/', userCtrl.createUser);
route.get('/getUser/', userCtrl.getUser);

module.exports = route;