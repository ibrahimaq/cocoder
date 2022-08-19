require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoute');
const verifyToken = require("./middleware/auth");
const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port 3000');
        })
    })
    .catch(err => console.log(err));
    

//auth
app.use(verifyToken);
//routes
app.use('/', userRoute);

app.get('/profile', (req,res) => {
    res.send('profile')
})
