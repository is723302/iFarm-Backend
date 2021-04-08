const seed = require("../models/seed");

exports.getSeeds = (req, res) => {
    seed.find({}, (err, results) => {
        console.log(results)
        res.send(results);
    });
}