const knexfile = require("../../knexfile");
const knex = require("knex")(knexfile[process.env.DATABASE]);

module.exports = knex;