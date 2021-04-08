const supervisor = require("../models/supervisor");

exports.getSupervisors = (req, res) => {
    supervisor.find({}, (err, results) => {
        console.log(results)
        res.send(results);
    });
}