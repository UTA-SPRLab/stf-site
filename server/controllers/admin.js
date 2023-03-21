const knex = require('../database/knex');

const USER_TABLE = "user";

// lookup information about other users
async function lookupUser(email) {
    const result = await knex(USER_TABLE)
        .where('email', 'like', '%' + email + '%')
        .select('*');

    if (result.length == 0) {
        return { error: "User does not exist" };
    }

    return result;
}

// promote users with permission 0 to 1
async function promoteUser(email) {
    const user = await knex(USER_TABLE)
        .where({ email: email })
        .select('permission');

    try {
        let permission = user[0].permission

        if (permission.length == 0) {
            return { error: "User does not exist" };
        }

        if (permission == 1) {
            return { error: "User is already permission 1 (academic)" };
        }

        if (permission > 1) {
            return { error: "User's current permission is 2 (admin) or greater" };
        }

        if (permission == 0) {
            await update({ email: email }, { permission: 1 });
            return `Successfully set ${email}'s permission to 1`;
        }

        return { error: "Unable to promote user" };
    } catch (err) {
        return { error: "Unable to promote user" };
    }
}

// promote users with permission 1 to 0
async function demoteUser(email) {
    const user = await knex(USER_TABLE)
        .where({ email: email })
        .select('permission');

    try {
        let permission = user[0].permission

        if (permission.length == 0) {
            return { error: "User does not exist" };
        }

        if (permission == 0) {
            return { error: "User is already permission 0 (user)" };
        }

        if (permission > 1) {
            return { error: "User's current permission is 2 (admin) or greater" };
        }

        if (permission == 1) {
            await update({ email: email }, { permission: 0 });
            return `Successfully set ${email}'s permission to 0`;
        }
        return { error: "Unable to demote user" };
    } catch (err) {
        return { error: "Unable to demote user" };
    }
}

// remove users from database
async function removeUser(email) {
    const user = await knex(USER_TABLE)
        .where({ email: email })
        .select('permission');

    try {
        let permission = user[0].permission

        if (permission.length == 0) {
            return { error: "User does not exist" };
        }

        if (permission.length > 1) {
            return { error: "User's current permission is 2 (admin) or greater" };
        }

        await knex(USER_TABLE).where({ email: email }).del();
        return `Successfully removed ${email}.`;
    } catch (err) {
        return { error: "Unable to remove user. User does not exist?" };
    }
}

// update user information
async function update(filters, data) {
    const result = await knex(USER_TABLE)
        .where(filters)
        .update(data);

    return result;
}

// function that might be implemented laters
// async function totalUsers() {
//     const result = await knex(USER_TABLE).count('email');
//     return result;
// }

module.exports = {
    lookupUser,
    promoteUser,
    demoteUser,
    removeUser
};