const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth.js');

//controller functions
const {createUser, loginUser, updateUser} = require('../controllers/userController')



//signup route
router.post('/register', createUser);

//login route
router.post('/login', loginUser)

//update user details
router.patch('/:id', verifyToken, updateUser);



module.exports = router;