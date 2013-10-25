// _index.js
exports.get_url = "/";
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
        var message = req.flash("message");
        var name = req.flash("name");
        res.render('index_thanks', {
            location: location,
            name: name,
            message: message,
            error_message: error_message
        });
    }
    else {
        res.render('index_thanks', {
            location: "",
            name: "",
            message: "",
            error_message: false
        });
    }
};

