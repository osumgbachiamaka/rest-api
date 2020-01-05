const express =require('express')
const adminCtrl = require('../controllers/adminCtrl')

const route = express.Router();
route.get('/create', adminCtrl);

module.exports = route;