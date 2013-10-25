// register.js
var mongoose = require("mongoose");

exports.post_url = "/register";
exports.post = function(req, res, next) {
    var location = req.param("location");
    var message = req.param("message");
    var name = req.param("name");
    mongoose.model("MessageCard").create({
        message: message,
        location: location,
        name: name}, function(err) {
            if (err) {
                next(err);
            }
            else {
                res.render("thanks_register", {});
            }
        });
};


