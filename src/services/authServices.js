
const userRegister = (username, password, email) => {

	if (!username) {
		throw new Error("Username não informado");
	}

	if (!password) {
		throw new Error("Password não informada");
	}

	if (!email) {
		throw new Error("Email não informado");
	}

	const user = { username, password, email };
	return user;
};

const userLogin = (username, password) => {

	if (!username) {
		throw new Error("Username não informado");
	}

	if (!password) {
		throw new Error("Password não informada");
	}


	if(password != "123456"){
		throw new Error("Passowrd incorreta");
	}

	const user = { username, password };
	return user;
};

module.exports = {
	userRegister,
	userLogin
};