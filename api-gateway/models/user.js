/*
Title: Assignment 6.3
Author: Professor Krasso && Express Generator,
Date: 12 June 2020,
Modified By: Brendan Mulhern,
Description: An API with the express generator
*/
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	username: String,
	password: String,
	email: String
});

module.exports.user = mongoose.model('User', userSchema);

module.exports.add = (user, callbacck) => {
	user.save(callback);
}

module.exports.getOne = (e, callback) => {
	var query = {email: e};
	User.findOne(query, callback);
}

module.exports.getById = (id, callback) => {
	var query = {_id: id};
	User.findById(query, callback);
}
