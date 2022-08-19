const User = require("../models/userModel");
const jwt = require('jsonwebtoken');
const { mongoose } = require("mongoose");


const createToken = (_id) => {
    //Mongodb uses _id as id
   return jwt.sign({_id}, process.env.JWTSECRET, {expiresIn: 60})
}


// get all users


// login user
const loginUser = async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.status(200).json({message: 'logged in successfully', email, name: user.name, id: user._id, token})
    } catch (error) {
        res.json({message: error.message});
    }

}

// create new user
const createUser = async (req, res) => {
    const {name, email, password} = req.body;
    
    try {
        const user =  await User.signup(name, email, password);

        //create token
        const token = createToken(user._id)
        res.status(200).json({message: 'post succesful', name, email, id: user._id, token})
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    
    
}

// delete user
const deleteUser = async (req,res) => {
    const {id} = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such user!'});
    }
    
    const user = await User.findOneAndDelete({_id: id});
    if(!user){
        return res.status(400).json({error: 'User not found!'})
    } else {
        return res.status(200).json({message: 'Your account has been successfully removed.'})
    }
}


// update user
const updateUser = async (req,res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such user!'})
    }

    const user = await User.findOneAndUpdate({_id: id}, {...req.body});
    if(!user){
        return res.status(400).json({error: 'Account cannot be found.'})
    } else {
        return res.status(200).json({message: 'Account has been updated.', user});
    }
    
}


//export
module.exports = {createUser, loginUser, updateUser};