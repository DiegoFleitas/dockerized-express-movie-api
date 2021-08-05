class User {
    constructor(email, firstName, lastName, password) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        // TODO: use hash
        this.password = password;
    }
}

module.exports = User;