const knex = require('../database/knex');

const DATA_TABLE = "data";

async function add(data) {
    const result = await knex(DATA_TABLE)
        .insert(data);
    return result;
}

async function remove(data) {
    const result = await knex(DATA_TABLE)
        .where(data)
        .del();
    return result;
}

async function update(filters, data) {
    const result = await knex(DATA_TABLE)
        .where(filters)
        .update(data);
    return result;
}

module.exports = {
    add,
    remove,
    update
};