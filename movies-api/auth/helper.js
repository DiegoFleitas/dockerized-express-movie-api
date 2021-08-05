var db = require('../db/database.js');
var User = require('../db/tables/user');
var Favorito = require('../db/tables/favorito');
var md5 = require('md5');

const APP_SECRET = 'h4ackersW1llN3verKn0w';

class Auth {
    static check(user) {
        let toCheck = db.where('users', 'email', user.email);
        if (toCheck) {
            // TODO: use hashes
            return toCheck.password === user.password;
        }
        return false;
    }

    static generateToken(user) {
        // dummy token
        return md5(user.email, APP_SECRET);
    }

    static getUserByToken(token) {
        return db.where('users', 'token', token);
    }
}

module.exports = Auth;