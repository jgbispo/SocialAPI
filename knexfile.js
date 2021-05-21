// Update with your config settings.

module.exports = {

	development: {
		client: "sqlite3",
		useNullAsDefault: true,
		connection: {
			filename: "./dev.sqlite3"
		},
		migrations: {
			tableName: "knex_migrations",
			directory: `${__dirname}/src/__database/migrations`
		},
		seeds: {
			directory: `${__dirname}/src/__database/seeds`
		}
	},

	// production: {
	// 	client: "postgresql",
	// 	connection: {
	// 		database: "my_db",
	// 		user: "username",
	// 		password: "password"
	// 	},
	// 	migrations: {
	// 		tableName: "knex_migrations"
	// 	}
	// }

};
