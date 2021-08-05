var auth = require('../../auth/helper.js');

class User {
    constructor(email, firstName, lastName, password) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        // TODO: use hash
        this.password = password;
        this.token = auth.generateToken(this);
    }
}

module.exports = User;