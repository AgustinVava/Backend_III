const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, default: "user" },
  cart: { type: mongoose.Schema.Types.ObjectId, ref: "Cart" },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
