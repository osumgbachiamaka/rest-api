const express = require('express');
const userCtrl = require('../controllers/userCtrl')

const route = express.Router();

route.post('/create/', userCtrl.createUser);
route.get('/getUser', userCtrl.getUser);
route.get('/getUser/:id', userCtrl.getAUserById);

route.get('/', (req, res) => {
    console.log('fire')
    res.send('okay')
})
module.exports = route;