const express = require('express')
var router = express.Router()
var AccountModel = require('./model/account.js')

router.get('/', (req, res) => {
    res.json('Router use GET')
})

router.post('/register', (req, res) => {
    var obj = {
        username : req.body.username,
        password : req.body.password
    };

    AccountModel.findUsername(obj.username)
    .then(data=> {
        res.json('Da ton tai')
    })
    AccountModel.createAccount(obj)
})

router.put('/update', (req, res) => {
    res.json('Router use PUT')
})

router.delete('/', (req, res) => {
    res.json('Router use DELETE')
})

module.exports = router