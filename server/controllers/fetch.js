const reports_knex = require('../database/reports_knex');
const phish_knex = require('../database/phish_knex');

const PHISH_TABLE = "data";
const REPORTS_TABLE = "reports";

const find = async (filters, amount, start) => {
    let begin = start ? start : 0
    let amt = amount ? amount : 25

    let result = await phish_knex(PHISH_TABLE)
        .select('*')
        .where(builder => {
            for (let key in filters) {
                builder.where(key, 'like', `%${filters[key]}%`)
            }
        })
        .orderBy('id', 'desc')
        .offset(begin)
        // .limit(amt);
        .limit(10000) //! TODO: Remove limit when adding users

    if (result.length == 0) {
        return { error: "No results found" };
    }

    // get size of entire database
    // let size = await reports_knex(PHISH_TABLE).count('id as count');

    // get info for "page, per_page, total, total_pages" and return under info
    let info = {
        page: Math.floor(begin/amt),
        per_page: amt,
        total: result.length,
        pages_remaining: Math.ceil(result.length / amt) - Math.floor(begin/amt),
        total_pages: Math.ceil(result.length / amt) + Math.floor(begin/amt)
    }

    return {information: info, message: result}; /*.splice(50,100)*/
};

const reportFind = async (filters, amount, start) => {
    let begin = start ? start : 0
    let amt = amount ? amount : 25

    let result = await reports_knex(REPORTS_TABLE)
        .select('*')
        .where(builder => {
            for (let key in filters) {
                builder.where(key, 'like', `%${filters[key]}%`)
            }
        })
        .orderBy('report_id')
        .offset(begin)
        // .limit(amt);
        .limit(100) //! TODO: Remove limit when adding users

    if (result.length == 0) {
        return { error: "No results found" };
    }

    // get size of entire database
    // let size = await phish_knex(REPORTS_TABLE).count('id as count');

    // get info for "page, per_page, total, total_pages" and return under info
    let info = {
        page: Math.floor(begin/amt),
        per_page: amt,
        total: result.length,
        pages_remaining: Math.ceil(result.length / amt) - Math.floor(begin/amt),
        total_pages: Math.ceil(result.length / amt) + Math.floor(begin/amt)
    }

    return {information: info, message: result}; /*.splice(50,100)*/
};

module.exports = {
    find,
    reportFind
};