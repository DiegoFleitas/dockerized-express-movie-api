var auth = require('../../auth/helper.js');

class User {
    constructor(email, firstName, lastName, password) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = auth.hash(password);
        this.token = auth.generateToken(email);
    }
}

module.exports = User;