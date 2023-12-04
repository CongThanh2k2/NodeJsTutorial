const express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
    res.json('Router')
})

router.get('/cart', (req, res) => {
    res.json('Cart')
})

//co param nen de phia sau de khong nham
router.get('/user/:id', (req, res) => {
    res.json('User'+req.params.id)
})

module.exports = router

