const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth.js');
const {createPost, deletePost, updatePost, getAllPosts, getPost} = require('../controllers/postController')

//get all posts
router.get('/', getAllPosts)

// get single post --- :id = post id
router.get('/:id', getPost);

// create new post --- :id = user id
router.post('/:id', createPost);

// delete post
router.delete('/:id', deletePost)

// update post --- :id = post id
router.patch('/:id', updatePost)



module.exports = router;