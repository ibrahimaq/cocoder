const jwt = require('jsonwebtoken');

const verifyToken = async (req, res) => {
    const {token} = req.body;

    if (token){
        const decode = jwt.verify(token, process.env.JWTSECRET);
        return res.status(200).json({message: "Logged in", loggedIn: true})
    }
    else{
        return res.status(401).json({message: "Unauthorised Access", loggedIn: false})
    }
}

module.exports = verifyToken;