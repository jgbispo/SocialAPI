const authServices = require("../services/authServices");
const userServices = require("../services/userServices");

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

		user[0].password = "secret";

		res.status(201).json({ user: user[0],  message: "successfully" });
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

const Delete = async (req, res) => {
	try {
		const { id } = req.query;
		await userServices.userDelete(id);
		res.status(204).json({ message: "Usuario deletado com sucesso" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

module.exports = {
	Login,
	Register,
	Upload,
	GetImages,
	Update,
	Delete
};