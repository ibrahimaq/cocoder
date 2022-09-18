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
// app.use('api/comment')

