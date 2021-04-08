const message = require("../models/message");

exports.getMessages = (req, res) => {
    message.find({}, (err, results) => {
        console.log(results)
        res.send(results);
    });
}