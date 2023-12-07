const express = require('express')
const router =express.Router()
const loginPageController = require('../controllers/loginpageController.js')

const userServer  = require('../servers/userServer.js')

router.get('/',loginPageController.getText)

module.exports = router