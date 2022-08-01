const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    userId : {type: String, required: true},
    imageUrl : {type: String},
    content : {type: String},
    likes : {type: Number, default: 0},
    usersLiked : {type: [String]},
    date : {type: Date, default: Date.now}
});

module.exports = mongoose.model('Post', postSchema);