const calendar = require("../models/calendar");

exports.getCalendar = (req, res) => {
  calendar.find({}, (err, results) => {
        console.log(results)
        res.send(results);
    });
}