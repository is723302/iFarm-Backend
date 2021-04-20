const Database = require('./database');

class Users extends Database {
    constructor() {
        console.log('Users model...');
        super();
        this.useCollection('users');
    }
}

module.exports = new Users();