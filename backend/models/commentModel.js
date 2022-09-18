const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
    {
        author: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: true
        },
        content: {
            type: String,
            required: true,
        },
        post: {
            type: mongoose.Types.ObjectId,
            ref: 'Post',
            required: true
        },
        edited: {
            type: Boolean
        },
        repliedTo: {
            type: mongoose.Types.ObjectId,
            ref: 'Post',
            required: true
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model('Comment', commentSchema)