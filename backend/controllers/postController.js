const {mongoose} = require('mongoose');
const Post = require('../models/postModel');

const getAllPosts = async (req,res) => {
    try {
        const getPosts = await Post.find().populate('author', 'username').sort('-createdAt')
        res.status(200).send(getPosts)
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getPost = async (req,res) => {
    const post_id = req.params.id;
    
    if(!mongoose.Types.ObjectId.isValid(post_id)){
        return res.status(404).json({error: 'This post does not exist.'})
    }

    try {
        const getPost = await Post.findOne({_id: post_id}).populate('author', 'username');
        res.status(200).json({post: getPost});
    } catch (error) {
        res.status(400).json({error: 'Post could not be found.'})
    }
}

const createPost = async (req,res) => {
    const {title, body, categories} = req.body;

    const author_id = req.params.id;
   
    if(!mongoose.Types.ObjectId.isValid(author_id)){
        return res.status(404).json({error: 'No such user!', id: author_id})
    }

    try {
        const post = await Post.create({
            title,
            body,
            author: author_id,
            categories,
            edited: false
        })
        res.status(200).json({message: 'post successful', post})
    } catch (error) {
        res.status(400).json({err: error.message});
    }
}

const updatePost = async (req,res) => {
    const post_id = req.params.id;
    const { title, body, categories } = req.body.updatedPost;
    const {author_id} = req.body
    console.log(body)
    // console.log(title, body, categories, author_id)
    // res.status(200).json({body: req.body, message: 'post updated successfully'}) 
    if(!mongoose.Types.ObjectId.isValid(post_id)){
        return res.status(404).json({error: 'Incorrect post credentials'})
    }
    else if(!mongoose.Types.ObjectId.isValid(author_id)){
        return res.status(404).json({error: 'Incorrect user credentials'})
    } 
   

    const post = await Post.findOne({_id: post_id})
    if(!post){
        return res.status(400).json({error: 'Post could not be found or does not exist'})
    } 
    else if(!post.author.equals(author_id)){
        return res.status(403).json({error: 'Incorrect authorisation credentials'}) 
    }

    const filter = {_id: post_id};
    const update = { title, body, categories, edited: true };
    const options = { new: true };

    try {
        const updatePost = await Post.findOneAndUpdate(filter, update, options).populate('author', 'username')
        res.status(200).json({message: 'post updated successfuly', success: true, post: updatePost})
        // res.status(200).json({message: 'post updated successful', success: true , title, body, categories, _id: post_id, author: {_id: author_id}})
    } catch (error) {
        res.status(400).json({error: "Sorry, we're having techincal difficulties at the moment. Try again later."})
    }
}

const deletePost = async (req, res) => {
    const post_id = req.params.id;
    const {author_id} = req.body; 

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

module.exports = {createPost, deletePost, updatePost, getAllPosts, getPost};

