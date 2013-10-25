
/**
 * Module dependencies.
 */

var express = require('express')
, routes = require('./routes')
, http = require('http')
, path = require('path');
var mongoose = require('mongoose');
var flash = require('connect-flash');

require("./models");

var db_name = null;

if (process.env.MONGOLAB_URI) {
    db_name = process.env.MONGOLAB_URI;
}
else {
    db_name = 'mongodb://localhost/hkfc-message-card';
}

mongoose.connect(db_name);

var app = express();

app.configure(function(){
    app.use(flash());
    app.use(express.cookieParser());
    app.use(express.session({ cookie: { maxAge: 60000 }, secret: process.env["COOKIE_SECRET"]}));
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.use(express.favicon());
    
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
    app.use(express.errorHandler());
});

app.all("/admin/*", express.basicAuth(function(user, pass) {
    return user == "hkfc" && pass == "madmagazine";
}));

routes.routes.forEach(function(r) {
    if (r.get_url && r.get) { 
        if (r.get_url instanceof Array) {
            r.get_url.forEach(function(u) {
                app.get(u, r.get);
            });
        }
        else {
            app.get(r.get_url, r.get);
        }
    }
    if (r.post_url && r.post) {
        if (r.post_url instanceof Array) {
            r.post_url.forEach(function(u) {
                app.post(u, r.post);
            });
        }
        else {
            app.post(r.post_url, r.post);
        }
    }
});


http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});
