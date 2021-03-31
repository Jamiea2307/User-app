const mongoose = require("mongoose");
const schema = mongoose.Schema;

const commentSchema = new schema({
  parentPost: { type: schema.Types.ObjectId, ref: "Post" },
  parentComment: { type: schema.Types.ObjectId, ref: "Comment" },
  author: { type: schema.Types.ObjectId, ref: "User" },
  content: { type: String, required: true },
  dateAdded: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Comment", commentSchema);
