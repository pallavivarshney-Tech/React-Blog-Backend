const express = require("express");
const {
  getBlog,
  createBlog,
  detailBlog,
  deleteBlog,
  updateBlog,
} = require("../controllers/blogController");

const router = express.Router();

router.post("/", createBlog);
router.get("/", getBlog);
router.get("/:id", detailBlog);
router.delete("/:id", deleteBlog);
router.put("/:id", updateBlog);

router.post("/", (req, res) => {});

module.exports = router;
