const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  profileImage: { type: String, required: true }, // base64 or file path
});

module.exports = mongoose.model("User", UserSchema);
