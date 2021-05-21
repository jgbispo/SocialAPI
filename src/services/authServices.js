const bcrypt = require("bcrypt");
const knex = require("../__database");
const { checkString } = require("jgchecker");

const userRegister = async (username, password, email) => {

	checkString(username, "Username não é uma string", "Username não informado");

	checkString(password, "Passoword não é uma string", "Password não informada");

	checkString(email, "Email não é uma string", "Email não informado");

	const user = {
		username: username.toLowerCase(),
		password,
		email
	};

	const hash = await bcrypt.hash(user.password, 10);
	user.password = hash;

	const id = await knex("users").insert(user).catch(error => {
		throw new Error(error.message);
	});

	return knex("users").select("*").where({ id: id[0] });
};

const userLogin = (username, password) => {

	checkString(username, "Username não é uma string", "Username não informado");

	checkString(password, "Passoword não é uma string", "Password não informada");

	if (password != "123456") {
		throw new Error("Passowrd incorreta");
	}

	const user = { username, password };
	return user;
};


module.exports = {
	userRegister,
	userLogin
};