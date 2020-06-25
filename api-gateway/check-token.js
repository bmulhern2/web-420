/*
Title: Assignment 8.4
Author: Professor Krasso && Express Generator,
Date: 16 June 2020,
Modified By: Brendan Mulhern,
Description: An API with the express generator
*/

var jwt = require('jsonwebtoken')
var config = require('./config')

function checkToken(req, res, next) {
    var token = req.headers['x-access-token'];

    if (!token)
        return res.status(403).send({ auth: false, message: 'No token provided.'});

     jwt.verify(token, config.web.secret, function(err, decided) {
         if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.'});

         req.userId = decoded.od;
         next();
     });   
}

module.exports = checkToken;