const mongoose = require("mongoose");

const { Schema } = mongoose;

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
  },
  content: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
