var mongoose = require('mongoose');

exports.createSchema = function(name, spec) {
  var klass = new mongoose.Schema(spec);
  mongoose.model(name, klass);
  return klass;
};
