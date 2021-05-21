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

const userLogin = async (username, password) => {

	checkString(username, "Username não é uma string", "Username não informado");

	checkString(password, "Passoword não é uma string", "Password não informada");

	const user = await knex("users").select("*").where({ username: username });

	if(!bcrypt.compare(password, user[0].password)){
		throw new Error("Passowrd incorreta");
	}

	return user[0];
};


module.exports = {
	userRegister,
	userLogin
};