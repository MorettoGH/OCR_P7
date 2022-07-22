const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    userId : {type: String},
    imageUrl : {type: String},
    content : {type: String},
    likes : {type: Number, default: 0},
    dislikes : {type: Number, default: 0},
    usersLiked : {type: [String]},
    usersDisliked : {type: [String]} 
});

module.exports = mongoose.model('Post', postSchema);