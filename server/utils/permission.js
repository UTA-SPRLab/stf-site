
const config = require('../config.json');

// converts number to permission
const convertPermission = async (permission) => {
    switch (permission) {
        case 0:
            return "user";
        case 1:
            return "academic";
        case 2:
            return "admin";
        case 3:
            return "maintainer";
        default:
            return "Invalid permission";
    }
}

const reqAmmount = async (permission) => {
    switch (permission) {
        case 0:
            return config.routes.fetch.endpoints.fetch.config.max[1].responses;
        case 1:
            return config.routes.fetch.endpoints.fetch.config.max[2].responses;
        case 2:
        case 3:
            return Number.MAX_SAFE_INTEGER;
        default:
            return config.routes.fetch.endpoints.fetch.config.max[0].responses;
    }
}

module.exports = {
    convertPermission,
    reqAmmount
}