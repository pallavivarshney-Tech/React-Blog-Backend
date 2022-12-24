const Blog = require("../models/blogModel");

//Create A blog

const createBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ msg: "error from backend" });
    // res.status(500).json({ msg: error.message });
  }
};

//Get And read Data

const getBlog = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//get detail blog
const detailBlog = async (req, res) => {
  //   console.log(req.params);
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json(`No task with  id ${id}`);
    }
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//Delete Task

const deleteBlog = async (req, res) => {
  //   console.log(req.params);
  try {
    const { id } = req.params;
    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) {
      return res.status(404).json(`No task with  id ${id}`);
    }
    res.status(200).send("Task Deleted");
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//Update Task

const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!blog) {
      return res.status(404).json(`No task with  id ${id}`);
    }
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  createBlog,
  getBlog,
  detailBlog,
  updateBlog,
  deleteBlog,
};
