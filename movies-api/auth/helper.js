var db = require('../db/database.js');
var User = require('../db/tables/user');
var Favorito = require('../db/tables/favorito');

class Auth {
    static check(user) {
        let toCheck = db.find('users', user.email);
        if (toCheck) {
            // TODO: use hashes
            return toCheck.password === user.password;
        }
        return false;
    }
}

module.exports = Auth;