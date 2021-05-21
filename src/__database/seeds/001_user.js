
exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("users").del()
		.then(function () {
			// Inserts seed entries
			return knex("users").insert([
				{username: "bispo", password:"123", email:"jgbispo15@gmail.com"}
			]);
		});
};
