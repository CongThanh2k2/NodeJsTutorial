const express = require('express')
const router = express.Router()

const loginServer = require('../servers/loginServer.js')

router.get('/',loginServer.get)

module.exports = router