const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  count: { type: Number, required: false, default: 0 },
  dateAdded: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
