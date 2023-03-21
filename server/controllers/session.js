const jwt = require('jsonwebtoken');
const userModels = require('./users.js');
const crypto = require("crypto");

const path = require('path');
const env = require('dotenv').config({ path: path.resolve(__dirname, '../.env') }).parsed

//checks if the email entered is valid
const checkIfValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

// creates a new user
const createNewUser = async (email, password) => {
    if (email == null || password == null) {
        return {
            error: "Incomplete input; no " + ((email == null && password == null) ? "email or password" : (password == null) ? "password" : "email") + " provided"
        }
    }

    //generates a random salt
    const salt = crypto.randomBytes(16).toString('hex');

    //hashes the password with the salt using sha256
    const hash = crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512', (err, derivedKey) => {
        if (err) throw err;
    }).toString('hex');

    //checks to see if email given is a valid email
    const isValidEmail = checkIfValid(email);
    if (!isValidEmail) {
        return {
            error: 'Invalid email'
        }
    }

    const result = await userModels.register(email, hash, salt);
    return result;
}



const generateAuthToken = async (email, permission) => {

    const accessTokenSecret = env.ACCESSTOKENSECRET;
    if (permission == 0) {
        const users = await userModels.find({ email: email });
        const accessToken = jwt.sign({ ...users[0], claims: [permission] }, accessTokenSecret);
        return accessToken;
    } else {
        return {
            error: 'Invalid permission: ' + permission
        }
    }

}

const authenticateUser = async (email, password) => {
    //checks to see if valid inputs are entered
    if (email == null || password == null) {
        return {
            error: (email == null) ? 'Email is missing' : 'Password is missing'
        };
    }
    const users = await userModels.find({ email: email });
    //checks to see if user exists
    if (users.length === 0) {
        console.error(`No users matched the email: ${email}`);
        return {
            error: 'Invalid credentials'
        };
    }
    //if they do, checks to see if password is correct
    const authentication = await verifyPasswordUser(email, password);
    if (authentication === false) {
        console.error(`Password for email: ${email} is incorrect`);
        return {
            error: 'Invalid credentials'
        };
    }
    return {
        error: ''
    };
}

const verifyPasswordUser = async (email, password) => {
    const user = await userModels.find({ email: email });
    const storedPassword = user[0].password;
    const salt = user[0].salt;
    const hashedPassword = crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512', (err, derivedKey) => {
        if (err) throw err;
    }).toString('hex');

    return storedPassword === hashedPassword;
}


module.exports = {
    authenticateUser,
    generateAuthToken,
    createNewUser
}