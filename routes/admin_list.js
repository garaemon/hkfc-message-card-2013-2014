// admin_list.js

var mongoose = require("mongoose");

exports.get_url = "/admin/list";

exports.get = function(req, res, next) {
    mongoose.model("MessageCard")
        .find()
        .sort("-created_at")
        .exec(function(err, messages) {
            if (err) {
                next(err);
            }
            else {
                res.render("admin_list", {
                    messages: messages
                });
            }
        });
};
