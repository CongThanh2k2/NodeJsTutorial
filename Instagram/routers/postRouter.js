const express = require('express')
const router = express.Router()
const postController = require('../controllers/postController.js')
const upload = require('../configs/uploadFile.js')


const postServer = require('../servers/postServer.js')

router.post('/upload-post',upload.single('post'),postController.upload)
router.get('/allPost',postController.getAllPost)

module.exports = router