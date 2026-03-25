const Post = require('../models/post');

// GET /api/posts — fetch all posts
const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 }); // newest first
    res.json(posts);
  } catch (err) {
    next(err); // passes error to errorHandler
  }
};

// GET /api/posts/:id — fetch one post by its ID
const getPostById = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (err) {
    next(err);
  }
};

// POST /api/posts — create a new post
const createPost = async (req, res, next) => {
  try {
    const { title, content, author, tags, coverImage } = req.body;
    const post = await Post.create({ title, content, author, tags, coverImage });
    res.status(201).json(post); // 201 = "Created"
  } catch (err) {
    next(err);
  }
};

// PUT /api/posts/:id — update an existing post
const updatePost = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // return the updated doc, re-run schema checks
    );
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (err) {
    next(err);
  }
};

// DELETE /api/posts/:id — delete a post
const deletePost = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json({ message: 'Post deleted successfully' });
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllPosts, getPostById, createPost, updatePost, deletePost };