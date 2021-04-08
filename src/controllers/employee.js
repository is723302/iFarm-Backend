const employee = require("../models/employee");

exports.renderUserPage = (req, res) => {
    res.end('User Page');
}

exports.getEmployees = (req, res) => {
    employee.find({}, (err, results) => {
        console.log(results)
        res.send(results);
    });
}