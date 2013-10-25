var libm = require("../lib/libmodel");
var mongoose = require("mongoose");


var MessageCardSchema = libm.createSchema("MessageCard", {
    name: String,
    message: String,
    location: String,
    created_at: Date
});

var MessageCard = mongoose.model("MessageCard");

MessageCard.create = function(spec, cb) {
    var name = spec.name;
    var message_sentence = spec.message;
    var location = spec.location;
    var message = new MessageCard();
    message.name = name;
    message.message = message_sentence;
    message.location = location;
    message.saveAndUpdate(cb);
};

MessageCard.prototype.saveAndUpdate = function(cb) {
    var self = this;
    self.updated_at = new Date();
    self.save(cb);
};
