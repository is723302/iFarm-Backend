const Database = require('./database');

class ApiKeys extends Database {
    constructor() {
        console.log('api-keys model...');
        super();
        this.useCollection('api-keys');
    }
}

module.exports = new ApiKeys();