const authServices = require("../services/authServices");

const Login = async (req, res) => {
	try {
		const { username, password } = req.body;

		const user = await authServices.userLogin(username, password);

		user.password = "secret";

		res.status(200).json({ user, message: "successfully" });
	} catch (error) {
		res.status(500).json({ message: "Error ao fazer login", error: error.message, code: 0 });
	}
};

const Register = async (req, res) => {
	try {
		const { username, email, password } = req.body;

		const user = await authServices.userRegister(username, password, email);

		user.password = "secret";

		res.status(201).json({ user,  message: "successfully" });
	} catch (error) {
		res.status(500).json({ message: "Não foi possivel cadastrar o usuario", error: error.message, code: 1 });
	}
};

const Update = (req, res) => {
	res.status(200).json({ router: "Update" });
};

const Upload = (req, res) => {
	res.status(200).json({ router: "Upload" });
};

const GetImages = (req, res) => {
	res.status(200).json({ router: "Get Images" });
};

const Delete = (req, res) => {
	res.status(200).json({ router: "Delete" });
};

module.exports = {
	Login,
	Register,
	Upload,
	GetImages,
	Update,
	Delete
};