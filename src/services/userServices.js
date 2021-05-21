const knex = require("../__database");

const userDelete = async (id) => {

	if (!id) {
		throw new Error("Id não informado");
	}
	const code = await knex("users").where({ id: id }).del().catch(error => {
		throw new Error(error.message);
	});

	if (code == 1) {
		return { message: "Usuario deletado com sucesso" };
	} else if (code == 0) {
		throw new Error("Nada foi alterado");
	}

	return;
};

module.exports = {
	userDelete
};