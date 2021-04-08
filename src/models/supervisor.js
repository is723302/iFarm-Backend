const Database = require('./database');

class Supervisor extends Database {
    constructor() {
        console.log('Supervisor model...');
        super();
        this.useCollection('supervisor');
    }
}

module.exports = new Supervisor();