const Database = require('./database');

class Employee extends Database {
    constructor() {
        console.log('Calendar model...');
        super();
        this.useCollection('calendar');
    }
}

module.exports = new Employee();