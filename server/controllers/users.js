const knex = require('../database/reports_knex');
const permission = require('../utils/permission.js');

const USER_TABLE = "user";

// creates a new user
async function register(email, hash, salt) {
    const user = await find({ email: email });
    if (user.length > 0) {
        return { error: "Email already registered" };
    }

    const result = await knex(USER_TABLE).insert({
        email: email,
        password: hash,
        salt: salt,
        permission: 0
    });

    return result;
}

// util function to filter a JS object
function pick(obj, ...props) {
    return props.reduce(function (result, prop) {
        result[prop] = obj[prop];
        return result;
    }, {});
}

// filtered find users from user database
const findFiltered = async (filters) => {
    const result = await knex(USER_TABLE)
        .where(filters)
        .select('*');

    const filteredResult = pick(result[0], 'email', 'permission');

    return filteredResult;
};

// find users from users database
const find = async (filters) => {
    const result = await knex(USER_TABLE)
        .where(filters)
        .select('*');

    if (result.length == 0) {
        return { error: "No results found" };
    }

    return result;
};

// return user permission
const getPermission = async (email) => {
    const result = await knex(USER_TABLE)
        .where({ email: email })
        .select('permission');

    return permission.convertPermission((result[0].permission));
}

module.exports = {
    register,
    find,
    findFiltered,
    getPermission
};