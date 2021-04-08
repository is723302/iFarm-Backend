const Database = require('./database');

class Employee extends Database {
    constructor() {
        console.log('Employee model...');
        super();
        this.useCollection('employee');
    }
}

module.exports = new Employee();