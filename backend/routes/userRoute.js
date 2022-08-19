const express = require('express');
const router = express.Router();

//controller functions
const {createUser, loginUser, updateUser} = require('../controllers/userController')


//login route
router.post('/login', loginUser)


//signup route
router.post('/signup', createUser);

//user settings route
router.post('/delete');

router.patch('/update/:id', updateUser);



module.exports = router;