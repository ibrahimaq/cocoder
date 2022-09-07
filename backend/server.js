const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoute');
const postRoute = require('./routes/postRoute')
const Post = require('./models/postModel')

const app = express();

app.use(express.json());
console.log(process.env.PORT)
PORT = process.env.PORT || 8000;
mongoose.connect(process.env.MONGO_URI)

    .then(()=>{
        app.listen(PORT, () => {
            console.log('connected to db & listening on port 4000');
        })
    })
    .catch(err => console.log(err));
    


//routes
app.use('/api/user', userRoute);
app.use('/api/post', postRoute);


// app.get('/', async (req,res) => {

//     try {
//         const author = await Post.find({title: 'My First Title'}).populate('author', 'username email')
     
//             res.status(200).json({doc: author})
     
//     } catch (error) {
//         res.status(400).json({message: 'not found'})
//     }
    
    
//     // res.send('hello')
// })


