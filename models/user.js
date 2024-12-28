const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  //username & password by deafult
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
