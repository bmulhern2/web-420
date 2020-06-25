/*
Title: Assignment 8.4
Author: Professor Krasso && Express Generator,
Date: 16 June 2020,
Modified By: Brendan Mulhern,
Description: An API with the express generator
*/

var express = require('express');
var checkToken = require('../check-token')

var router = express.Router();
var auth_controller = require('../controllers/authController');

// POST request for registering a user
router.post('/auth/register', auth_controller.user_register);

// GET request for verifying user tokens
router.get('/auth/token', auth_controller.user_token);

router.post('/auth/login', auth_controller.user_login);

router.get('/auth/logout', auth_controller.user_logout);

router.get('/auth/token', checkToken, auth_controller.user_token);
module.exports = router;
