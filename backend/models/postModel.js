const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    categories: {
      type: [{
        type: String
      }],
      required: true
    },
    comment_count: {
      type: Number, 
      default: 0
    },
    edited: {
      type: Boolean
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('post', postSchema);
