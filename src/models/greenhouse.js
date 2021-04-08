const Database = require('./database');

class Greenhouse extends Database {
    constructor() {
        console.log('Greenhouse model...');
        super();
        this.useCollection('greenhouse');
    }
}

module.exports = new Greenhouse();