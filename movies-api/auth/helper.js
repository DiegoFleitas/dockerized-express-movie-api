var db = require('../db/database.js');
var User = require('../db/tables/user');
var Favorito = require('../db/tables/favorito');
var md5 = require('md5');

const APP_SECRET = 'h4ackersW1llN3verKn0w';

class Auth {
    static checkCredentials(email, password) {
        let toCheck = db.where('users', 'email', email);
        if (toCheck) {
            const hashedPassword = toCheck.password;
            return hashedPassword === this.hash(password);
        }
        return false;
    }

    static tokenIsValid(token) {
        const exists = db.where('users', 'token', token);
        return (exists);
    }

    static generateToken(email) {
        // dummy token
        return this.hash(email, APP_SECRET);
    }

    static getUserByToken(token) {
        return db.where('users', 'token', token);
    }

    static hash(string) {
        return md5(string, APP_SECRET);
    }
}

module.exports = Auth;