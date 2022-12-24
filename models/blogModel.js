const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      // required: [true, "Please add a Title"],
    },
    img: {
      type: String,
      // required: [true, "Please provide a image source"],
    },
    Description: {
      type: String,
    },
    category: {
      type: String,
      // required: [true, "Please specify the category"],
    },
    Date: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model("Post", blogSchema);

module.exports = Blog;
