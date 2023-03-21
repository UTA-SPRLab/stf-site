const knex = require('knex');
const config = require('../config.json');

module.exports = knex(config.phish_database);