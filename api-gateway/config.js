/*
Title: Assignment 6.3
Author: Professor Krasso && Express Generator,
Date: 12 May 2020,
Modified By: Brendan Mulhern,
Description: An API with the express generator
*/
var config = {};
config.web = {};
config.web.port = process.env.PORT || '3000';
config.web.secret = 'topsecret'
module.exports = config;
