const {mongoose} = require('mongoose');
const Post = require('../models/postModel');

const getAllPosts = async (req,res) => {
    try {
        const getPosts = await Post.find().populate('author', 'username').sort('-createdAt')
        res.status(200).json({getPosts})
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const createPost = async (req,res) => {
    const {title, body} = req.body;
  
    const author_id = req.params.id;
   
    if(!mongoose.Types.ObjectId.isValid(author_id)){
        return res.status(404).json({error: 'No such user!', id: author_id})
    }

    try {
        const post = await Post.create({
            title,
            body,
            author: author_id
        })
        res.status(200).json({message: 'post successful', post})
    } catch (error) {
        res.status(400).json({err: error.message});
    }
}

const updatePost = async (req,res) => {
    const post_id = req.params.id;
    const author_id = req.body.user_id;
    const body = req.body.body;
    // res.json({body, post_id, author_id})
    if(!mongoose.Types.ObjectId.isValid(post_id)){
        return res.status(404).json({error: 'Incorrect post credentials'})
    }
    else if(!mongoose.Types.ObjectId.isValid(author_id)){
        return res.status(404).json({error: 'Incorrect user credentials'})
    } 
   

    const post = await Post.findOne({_id: post_id})
    if(!post){
        res.status(400).json({error: 'Post could not be found or does not exist'})
    } 
    else if(!post.author.equals(author_id)){
        return res.status(403).json({error: 'Incorrect authorisation credentials'})
    }

    try {
        const updatePost = await post.updateOne({body, edited: true})
        res.status(200).json({message: 'Post updated successfully', updatedPost: post})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deletePost = async (req, res) => {
    const post_id = req.params.id;
    const author_id = req.body.user_id;

    if(!mongoose.Types.ObjectId.isValid(post_id)){
        return res.status(404).json({error: 'Incorrect post credentials'})
    }
    else if(!mongoose.Types.ObjectId.isValid(author_id)){
        return res.status(404).json({error: 'Incorrect user credentials'})
    }

    const post = await Post.findOne({_id: post_id})
    // res.json({author_id, postAuthor: post.author})
    if(!post){
        return res.status(404).json({error: 'Post could not be found or does not exist'})
    }
    
    else if(!post.author.equals(author_id)){
        return res.status(403).json({error: 'Incorrect authorisation credentials'})
    }

    try {
        const deletePost = await post.deleteOne();
        res.status(200).json({message: 'Post succesfully deleted'})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {createPost, deletePost, updatePost, getAllPosts};

