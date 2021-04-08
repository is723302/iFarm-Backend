const greenhouse = require("../models/greenhouse");

exports.getGreenhouses = (req, res) => {
    greenhouse.find({}, (err, results) => {
        console.log(results)
        res.send(results);
    });
}