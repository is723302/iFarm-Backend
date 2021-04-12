const seed = require("../models/seed");
var ObjectId = require('mongodb').ObjectId;

exports.getSeeds = (req, res) => {
    seed.find({}, (err, results) => {
        console.log(results)
        res.send(results);
    });
}

exports.getSeed = (req, res) => {
    console.log(req.params.id);
    seed.findOne({"_id":ObjectId(req.params.id)}, (err, results) => {
        console.log(results)
        res.send(results[0]);
    });
}