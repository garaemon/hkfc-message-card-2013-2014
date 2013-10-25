// _index.js
exports.get_url = "/";

var LOCATIONS = [{
  value: "01matsuyama",
  name: "2013/10/26 松山サロンキティ"
}];

exports.get = function(req, res, next) {
  var error = req.param("error");
  console.log(error);
  if (error) {
    
    var error_message = "";
    switch(error) {
    case "nolocation":
      error_message = "場所が選択されていません";
      break;
    case "noname":
      error_message = "名前が指定されていません";
      break;
    case "nomessage":
      error_message = "メッセージが指定されていません";
      break;
    }
    var location = req.flash("location");
    var message1 = req.flash("message1");
    var message2 = req.flash("message2");
    var message3 = req.flash("message3");
    var name = req.flash("name");
    res.render('index', {
      location: location,
      name: name,
      message1: message1,
      message2: message2,
      message3: message3,
      locations: LOCATIONS,
      error_message: error_message
    });
  }
  else {
    res.render('index', {
      location: "",
      name: "",
      message1: "",
      message2: "",
      message3: "",
      locations: LOCATIONS,
      error_message: false
    });
  }
};

