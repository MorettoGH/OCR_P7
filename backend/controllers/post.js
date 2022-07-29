const Post = require('../models/Post');
const fs = require('fs');

exports.createPost = (req, res, next) => {
    const content = req.body.post;
    const post = new Post({
        userId: req.auth.userId,
        content: content,
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
    Post.updateOne({_id: req.params.id}, {...postObject, _id: req.params.id})
                .then(() => res.status(200).json({message: 'Publication modifiée'}))
                .catch(error => res.status(404).json({error}));
};

exports.deletePost = (req, res, next) => {
    Post.findOne({_id: req.params.id})
        .then((post) => {
            const filename = post.imageUrl.split('/images/')[1];
            fs.unlink(`images/${filename}`, () => {
                Post.deleteOne({_id: req.params.id})
                    .then(() => res.status(200).json({ message : "Sauce deleted !"}))
                    .catch(error => res.status(400).json({ error }));
            });
        })
        .catch(error => res.status(500).json({ error }));
}

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

exports.likePost = (req, res, next) => {
    // use the req.body.userLiked to check if the user already like the post with the req.-> auth <- .userId comparison
    if (!req.body.usersLiked.includes(req.auth.userId)) {
        // if userId not find - update like +1 and add the userId in usersLiked array
        Post.updateOne({ _id: req.params.id }, { $inc: { likes: +1 }, $push: { usersLiked: req.auth.userId } })
            .then(() => res.status(200).json({ message: "Post liked !", userId: req.auth.userId }))
            .catch((error) => res.status(400).json({ error }));
    } else {
        // if user id exist, update like -1 and remove the user id from the usersLike array
        Post.updateOne({ _id: req.params.id }, { $inc: { likes: -1 }, $pull: { usersLiked: req.auth.userId } })
            .then(() => res.status(200).json({ message: "like cancelled !" }))
            .catch((error) => res.status(500).json({ error }));
    }
};