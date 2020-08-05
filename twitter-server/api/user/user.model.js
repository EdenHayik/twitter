const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
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
    followingArray: {
        type: [String],
        require: true
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;