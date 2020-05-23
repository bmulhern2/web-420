var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	username: String,
	password: String,
	email: String
});

module.exports = mongoose.model('User', userSchema);

module.exports.add = (user, callbacck) => {
	user.save(callback);
}

module.exports.getById = (id, callback) => {
	var query = {_id: id};
	User.findById(query, callback);
}