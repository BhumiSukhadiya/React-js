'use strict';
//import dependency

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//create new instance of the mongoose.schema. the schema takes an 
//object that shows the shape of your database entries.
var userSchema = new Schema({
  UserName: String,
  EmailId: String,
  Password: String

}, { versionKey: false });
//export our module to use in server.js
module.exports = mongoose.model('userSchema', userSchema);

//# sourceMappingURL=userData-compiled.js.map