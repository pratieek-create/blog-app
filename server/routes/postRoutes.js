const express = require('express');
const router = express.Router();
const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require('../controllers/postController');
const protect = require('../middleware/authMiddleware');

router.get('/',       getAllPosts);
router.get('/:id',    getPostById);
router.post('/',      protect, createPost);   // 🔒 login required
router.put('/:id',    protect, updatePost);   // 🔒 login required
router.delete('/:id', protect, deletePost);   // 🔒 login required

module.exports = router;