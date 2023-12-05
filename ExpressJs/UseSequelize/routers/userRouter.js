const express = require('express')
const router = express.Router

const userServer = require('../servers/userServer.js')

router.get('/', userServer.getAll)

module.exports = router