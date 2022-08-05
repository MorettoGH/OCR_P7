const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()

const User = require('../models/User');


exports.signup = (req, res, next) => {
    let emailValid = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
    if (emailValid.test(req.body.email)) {
        bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                email: req.body.email,
                password: hash
            });
            user.save()
                .then(() => res.status(201).json({message: 'Utilisateur créé'}))
                .catch(error => res.status(400).json({error}));
        })
        .catch(error => res.status(500).json({error}));
    }else{
        console.log("email non valide");
    }   
};

exports.login = (req, res, next) => {
    User.findOne({email: req.body.email})
        .then(user => {
            if (user === null){
                res.status(401).json({message: 'Identifiant ou mot de passe incorrecte'});
            }else{
                bcrypt.compare(req.body.password, user.password)
                    .then(valid => {
                        if (!valid){
                            res.status(401).json({message: 'Identifiant ou mot de passe incorrecte'});
                        }else{
                            const token = jwt.sign(
                                {userId: user._id, 
                                isAdmin: user.isAdmin},
                                process.env.SECRET_KEY,
                                {expiresIn: '24h'}
                            );
                            res.header('Authorization', 'Bearer ' + token);
                            return res.json({token, userId: user._id, isAdmin : user.isAdmin})
                        }
                    })
                    .catch(error => res.status(500).json({error}));  
            }
        })
        .catch(error => res.status(500).json({error}));    
};