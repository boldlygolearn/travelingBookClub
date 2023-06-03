const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter your first name"],
    lowercase: true,
  },
  lastName: {
    type: String,
    required: [true, "Please enter your last name"],
    lowercase: true,
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid email"],
    lowercase: true,
    // validate: [()]
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minlength: [8, "Minimum password length is 8 characters"],
  },
});

module.exports = mongoose.model("user", UserSchema);
