// preview.js
exports.post_url = "/preview";
exports.post = function(req, res, next) {
    var name = req.param("name");
    var message = req.param("message");
    var location = req.param("location");
    var cookie_expire = new Date(Date.now() + 60 * 1000);
    
    if (!name || name.length == 0) {
        req.flash("location", location);
        req.flash("message", message);
        res.redirect("/?error=noname");
    }
    else if (!message || message.length == 0) {
        req.flash("location", location);
        req.flash("name", name);
        res.redirect("/?error=nomessage");
    }
    else if (!location || location.length == 0 || location == "none") {
        req.flash("name", name);
        req.flash("message", message);
        res.redirect("/?error=nolocation");
    }
    else {
        // var newlined_message = message.split("\n").join("<br />");
        // message.replaceAll("\n", "<br />");
        res.render("preview", {
            name: name,
            message: message.trim(),
            location: location
        });
    }
};

