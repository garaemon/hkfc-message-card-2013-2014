var libm = require("../lib/libmodel");
var mongoose = require("mongoose");


var MessageCardSchema = libm.createSchema("MessageCard", {
  name: String,
  message1: String,
  message2: String,
  message3: String,
  location: String,
  created_at: Date
});

var MessageCard = mongoose.model("MessageCard");

MessageCard.create = function(spec, cb) {
  var name = spec.name;
  var message1_sentence = spec.message1;
  var message2_sentence = spec.message2;
  var message3_sentence = spec.message3;
  var location = spec.location;
  var message = new MessageCard();
  message.name = name;
  message.message1 = message1_sentence;
  message.message2 = message2_sentence;
  message.message3 = message3_sentence;
  message.location = location;
  message.saveAndUpdate(cb);
};

MessageCard.prototype.saveAndUpdate = function(cb) {
  var self = this;
  self.updated_at = new Date();
  self.save(cb);
};
