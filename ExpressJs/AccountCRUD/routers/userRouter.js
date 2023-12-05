const express = require('express')
const router = express.Router()

const userServer = require('../server/userServer.js')

router.get('/', userServer.getAll)
router.get('/:id',userServer.getById)
router.post('/', userServer.create)
router.put('/:id',userServer.update)
router.delete('/:id',userServer.delete)

module.exports = router
