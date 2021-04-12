const supervisor = require("../models/supervisor");
var ObjectId = require('mongodb').ObjectId;

exports.getSupervisors = (req, res) => {
    supervisor.find({}, (err, results) => {
        console.log(results)
        res.send(results);
    });
}

exports.getSupervisor = (req, res) => {
    console.log(req.params.id);
    supervisor.findOne({"_id":ObjectId(req.params.id)}, (err, results) => {
        console.log(results)
        res.send(results[0]);
    });
}