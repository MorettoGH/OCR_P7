const Post = require('../models/Post');

exports.createPost = (req, res, next) => {
    //delete req.body._id;
    const post = new Post({
        ...req.body
    });
    post.save()
        .then(() => res.status(201).json({message: 'Votre publication a été publiée'}))
        .catch(error => res.status(400).json({error}));
};

exports.modifyPost = (req, res, next) => {
    Post.updateOne({_id: req.params.id}, {...req.body, _id: req.params.id})
        .then(() => res.status(200).json({message: 'Publication modifiée'}))
        .catch(error => res.status(404).json({error}));
};

exports.deletePost = (req, res, next) => {
    Post.deleteOne({_id: req.params.id})
        .then(() => res.status(200).json({message: 'Publication supprimée'}))
        .catch(error => res.status(404).json({error}));
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