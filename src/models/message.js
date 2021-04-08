const Database = require('./database');

class Message extends Database {
    constructor() {
        console.log('Message model...');
        super();
        this.useCollection('message');
    }
}

module.exports = new Message();