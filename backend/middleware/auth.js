const jwt = require('jsonwebtoken');


const verifyToken = async (req, res, next) => {
    const {token} = req.body;

    if (!token){
        return res.status(401).json({error: jwt.decode, loggedIn: false})
    }
    jwt.verify(token, process.env.JWTSECRET, (err, decoded) => {
       if (err && err.name == 'TokenExpiredError'){
            return res.status(422).json({
                error: 'Session Timeout. Please sign in again.',
                expired: true,
                loggedIn: false
                })
        }
        
        decoded = req.user;
        next();
    
    });

    
}

module.exports = verifyToken;