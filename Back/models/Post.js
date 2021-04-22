const mongoose = require("mongoose");
const schema = mongoose.Schema;

const postSchema = new schema({
  name: { type: schema.Types.ObjectId, ref: "User" },
  title: { type: String, required: true },
  body: { type: String, required: true },
  dateAdded: { type: Date, default: Date.now },
  comments: [{ type: schema.Types.ObjectId, ref: "Comment" }],
});

module.exports = mongoose.model("Post", postSchema);
