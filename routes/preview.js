// preview.js
exports.post_url = "/preview";
exports.post = function(req, res, next) {
  var name = req.param("name");
  var message1 = req.param("message1");
  var message2 = req.param("message2");
  var message3 = req.param("message3");
  var location = req.param("location");
  var cookie_expire = new Date(Date.now() + 60 * 1000);
  
  if (!name || name.length == 0) {
    req.flash("location", location);
    req.flash("message1", message1);
    req.flash("message2", message2);
    req.flash("message3", message3);
    res.redirect("/?error=noname");
  }
  else if (!message1 || message1.length == 0) {
    req.flash("location", location);
    req.flash("name", name);
    req.flash("message2", message2);
    req.flash("message3", message3);
    res.redirect("/?error=nomessage1");
  }
  else if (!message2 || message2.length == 0) {
    req.flash("location", location);
    req.flash("name", name);
    req.flash("message1", message2);
    req.flash("message3", message3);
    res.redirect("/?error=nomessage2");
  }
  else if (!message3 || message3.length == 0) {
    req.flash("location", location);
    req.flash("name", name);
    req.flash("message2", message2);
    req.flash("message1", message1);
    res.redirect("/?error=nomessage3");
  }
  else if (!location || location.length == 0 || location == "none") {
    req.flash("name", name);
    req.flash("message1", message1);
    req.flash("message2", message2);
    req.flash("message3", message3);
    res.redirect("/?error=nolocation");
  }
  else {
    // var newlined_message = message.split("\n").join("<br />");
    // message.replaceAll("\n", "<br />");
    res.render("preview", {
      name: name,
      message1: message1.trim(),
      message2: message2.trim(),
      message3: message3.trim(),
      location: location
    });
  }
};

