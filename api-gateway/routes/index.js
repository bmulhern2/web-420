/*
Title: Assignment 6.3
Author: Professor Krasso && Express Generator,
Date: 12 June 2020,
Modified By: Brendan Mulhern,
Description: An API with the express generator
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
