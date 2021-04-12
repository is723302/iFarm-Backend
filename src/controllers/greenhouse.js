const greenhouse = require("../models/greenhouse");
var ObjectId = require('mongodb').ObjectId;

exports.getGreenhouses = (req, res) => {
    greenhouse.find({}, (err, results) => {
        console.log(results)
        res.send(results);
    });
}

exports.getGreenhouse = (req, res) => {
    console.log(req.params.id);
    greenhouse.findOne({"_id":ObjectId(req.params.id)}, (err, results) => {
        console.log(results)
        res.send(results[0]);
    });
}