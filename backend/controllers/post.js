const Post = require('../models/Post');
const fs = require('fs');

exports.createPost = (req, res, next) => {
    const postObject = JSON.parse(req.body.post);
    delete postObject._id;
    delete postObject._userId   //1)ici j'ai ajouté une ligne de sécurité (voir avant-avant dernier cours de Will) et j'ai un doute sur le underscore devant userId
    const post = new Post({
        ...postObject,
        userId: req.auth.userId,    //2)donc j'ajoute la ligne ici aussi, il faudra surement choisir entre ces lignes "1), 2) et 3)" et le if/else de auth.js)
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    post.save()
        .then(() => res.status(201).json({message: 'Votre publication a été publiée'}))
        .catch(error => res.status(400).json({error}));
};

exports.modifyPost = (req, res, next) => {
    const postObject = req.file ? {
        ...JSON.parse(req.body.post),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : {...req.body};
    delete postObject._userId;  //3) encore une fois un ajout pour la sécurité lié au 2 choses au dessus
    Post.findOne({_id: req.params.id})  // ici il sagi d'une verification supplémentaire ajoutée (de la ligne 23 à 33)
        .then((post) => {
            if (post.userId != req.auth.userId) {
                res.status(400).json({message: 'Requête non autorisée'})
            }else{
                Post.updateOne({_id: req.params.id}, {...postObject, _id: req.params.id})   //parcontre le bloc post.updateOne est valide si l'ajout findOne est cassé
                .then(() => res.status(200).json({message: 'Publication modifiée'}))
                .catch(error => res.status(404).json({error}));
            }
        })
        .catch(error => res.status(400).json({error}));
};

exports.deletePost = (req, res, next) => {
    Post.findOne({_id: req.params.id})
        .then((post) => {
            if (post.userId != req.auth.userId) {   //meme principe ici que pour le modify, crainte de l'ajout cassé (ce qui est dans le If est un ajout sécurité)
                res.status(400).json({message: 'Requête non autorisée'})
            }else{
                const filename = post.imageUrl.split('/images/')[1];
                fs.unlink(`images/${filename}`, () => {
                    Post.deleteOne({_id: req.params.id})
                    .then(() => res.status(200).json({message: 'Publication supprimée'}))
                    .catch(error => res.status(404).json({error}));
                });
            }
        })
        .catch(error => res.status(400).json({error}));
};

exports.getOnePost = (req, res, next) => {
    Post.findOne({_id: req.params.id})
        .then(post => res.status(200).json(post))
        .catch(error => res.status(404).json({error}));
};

exports.getAllPosts = (req, res, next) => {
    Post.find()
        .then(posts => res.status(200).json(posts))
        .catch(error => res.status(400).json({error}));
};