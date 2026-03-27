const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,           // removes accidental spaces at start/end
    },
    content: {
      type: String,
      required: [true, 'Content is required'],
    },
    author: {
      type: String,
      default: 'Anonymous',
    },
    tags: {
      type: [String],       // an array of strings like ['javascript', 'react']
      default: [],
    },
    coverImage: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }      // automatically adds createdAt and updatedAt
);

module.exports = mongoose.model('Post', postSchema);