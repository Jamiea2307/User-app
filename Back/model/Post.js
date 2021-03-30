const mongoose = require("mongoose");
const schema = mongoose.Schema;

const postSchema = new schema({
  author: { type: schema.Types.ObjectId, ref: "User" },
  content: { type: String, required: true },
  dateAdded: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Post", postSchema);
