const express = require('express')
const router =express.Router()
const loginPageController = require('../controllers/loginpageController.js')
const signupController = require('../controllers/signupController.js')
const { query } = require('express-validator');

const userServer  = require('../servers/userServer.js')

router.get('/',loginPageController.getText)
router.post('/login',loginPageController.login)
router.get('/login',loginPageController.load)
// router.get('/login?page=/:page',loginPageController.load)

router.get('/all',userServer.getAllUser)
router.post('/create',userServer.createUser)
router.get('/signup',signupController.openSignup)
router.post('/signup/create',signupController.signup)
router.post('/signup/create/otp',signupController.verifyOTP)

module.exports = router