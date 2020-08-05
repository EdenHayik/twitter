const mongoose = require('mongoose');
const { Schema } = mongoose;

const tweetSchema = new Schema({
    user: {
        type: String,
        require: true,
        trim: true
    },
    userName: {
        type: String,
        require: true,
        trim: true
    },
    content: {
        type: String,
        require: true,
        trim: true
    },
    dateCreated: {
        type: Date,
        require: true,
    },
    isDeleted: { 
        type: Boolean,
        require: true
    }
});

const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;