const Database = require('./database');

class Seed extends Database {
    constructor() {
        console.log('Seed model...');
        super();
        this.useCollection('seed');
    }
}

module.exports = new Seed();