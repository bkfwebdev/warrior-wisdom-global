const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create schema
const UserSchema = new Schema({
  name: {
    type: string,
    required: true
  },

  email: {
    type: string,
    required: true
  },

  avatar: {
    type: srtring
  },

  password: {
    type: string,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("users", UserSchema);
