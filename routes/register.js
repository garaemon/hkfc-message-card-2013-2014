// register.js
var mongoose = require("mongoose");

exports.post_url = "/register";
exports.post = function(req, res, next) {
  var location = req.param("location");
  var message1 = req.param("message1");
  var message2 = req.param("message2");
  var message3 = req.param("message3");
  var name = req.param("name");
  mongoose.model("MessageCard").create({
    message1: message1,
    message2: message2,
    message3: message3,
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

