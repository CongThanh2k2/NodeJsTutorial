const express = require('express')
const router = express.Router()

const userServer = require('../server/userServer.js')

router.get('/', userServer.getAll)
router.get('/:id',userServer.getById)

module.exports = router