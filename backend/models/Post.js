const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    userId : {type: String, required: true},
    imageUrl : {type: String},
    content : {type: String, required: true},
    likes : {type: Number, default: 0},
    usersLiked : {type: [String]},
    timestamp : {type: Date, default: Date.now}
});

module.exports = mongoose.model('Post', postSchema);