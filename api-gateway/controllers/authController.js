var User = require('../models/user');
var jwt = require('jsonwebtoken');
var bcrpyt = require('bcryptjs');
var config = require('../config')

exports.user_register = function(req, res) {
	var hashedPassword = bcrypt.hashSync(req.body.password, 8);
	var newUser = new User({
		username: req.body.username,
		password: hashedPassword,
		email: req.body.email
	});

	User.add(newUser, (err, user) => {
		if(err) {
			return res.status(500).send('There was a problem registering the user.');
		}

		var token = jwt.sign({ id: user._id}, config.web.secret, {
			expiresIn: 86400
		});

		res.statu(200).send({ auth: true, token: token });
	});
};
exports.user_token = function(req, res) {
	var token = req.headers['e-access-token'];
	if (!token) return res.status(401).send({ auth: false, message: 'No token provided'});

	jwt.verify(token, config.web.secret, function(err, decoded) {
		if(err) return res.status(500).send('There was a problem finding the user');
		
		if(!user) return res.status(404).send('No user found');

		res.status(200).send(user);
	});
};

exports.user_login = function(req, res) {
	User.getOne(req.body.email, function(err, user) {
		if (err) return res.status(500).send('Error on server.');
		if (!user) return res.status(404).send('No user found.');

		var passwordIsValid = brypt.compareSync(req.body.password, user.password);
		
		if (!passwordIsValid) return res.status(401).send({ auth: false, token: null});

		var token = jqt.sign({ id: user._id}, config.web.secret, {
			expiresIn: 86400
		});
		res.status(200).send( {auth: true, token: token });
	});
};
exports.user_logout = function(req, res) {
	res.status(200).send({ auth: false, token: null});
}
