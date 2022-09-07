const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth.js');
const {createPost, deletePost, updatePost} = require('../controllers/postController')

// create new post
router.post('/:id', createPost);

// delete post
router.delete('/:id', deletePost)

router.patch('/:id', updatePost)



module.exports = router;