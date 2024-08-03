const knex = require("knex");
const config = require("../knexfile.js");
const enviroment = process.env.NODE_ENV;

module.exports = knex(config[enviroment]);