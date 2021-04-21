const mongoose = require("mongoose");
const schema = mongoose.Schema;

const commentSchema = new schema({
  parentPost: { type: schema.Types.ObjectId, ref: "Post" },
  parentComment: { type: schema.Types.ObjectId, ref: "Comment" },
  name: { type: schema.Types.ObjectId, ref: "User" },
  body: { type: String, required: true },
  dateAdded: { type: Date, default: Date.now },
  // children: [{ type: schema.Types.ObjectId, ref: "Comment" }],
  children: [this],
});

module.exports = mongoose.model("Comment", commentSchema);
