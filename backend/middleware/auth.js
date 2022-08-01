const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'RANDOM_SECRET_TOKEN');
        const userId = decodedToken.userId;
        const admin = decodedToken.isAdmin
        req.auth = {userId: userId};
        if (req.body.userId && req.body.userId !== userId && !admin) {
            throw 'User ID invalide !';
        } else {
            next();
        }   
    }catch(error){
        res.status(401).json({error: error | 'requête non authentifiée'});
    }
};