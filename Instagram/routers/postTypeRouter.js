const express = require('express')
const router = express.Router()

const postTypeSever = require('../servers/postTypeServer.js')

router.get('/all',postTypeSever.getAllPostType)
router.post('/create', postTypeSever.createPostType)

module.exports = router
