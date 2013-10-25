
/*
 * GET home page.
 */

var files = ["_index", "preview", "register", "admin_list"];
var subDirs = [];
exports.routes = files.map(function(x) {
  return require("./" + x);
});

for (var i = 0; i < subDirs.length; i++) {
  var d = subDirs[i];
  var subRoutes = require("./" + d);
  for (var j = 0; j < subRoutes.routes.length; j++) {
    var subRouteFile = subRoutes.routes[j];
    exports.routes.push(subRouteFile);
  }
}

