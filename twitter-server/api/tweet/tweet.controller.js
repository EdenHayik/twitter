let config = require('../../config/config');
let Tweet = require('../tweet/tweet.model');
let User = require('../user/user.model');
let mongoose = require('mongoose');
const tweetRoute = require('./tweet.route');

/**
 * Async middleware controller to catch all async controllers errors
 */
module.exports.CheckId = async(req, res, next) => {
    if (mongoose.Types.ObjectId.isValid(req.params.id)){
        return next();
    }
}

module.exports.GetTweets = async (req, res) => {
    if (req.user == config.admin_user) {
        try {
            await Tweet.find({}, function(err, data){
                res.json(data);
            });
        }
        catch (err) {
            console.error(err + " in GetTweets (admin)");
            res.status(400);
        }
    }
    else {
        try {
            //find the user's properties and get the follow list
            await User.findOne({user: req.user}), function(err, user){
                followingArray = user.followingArray;
                //find all the tweets of people in the array or self
                Tweet.find({ $or: [{ name: req.user }, { user: {$in: followingArray} } ]}, function (err, data){
                    res.json(data);
                });
            }
        }
        catch (err) {
            console.error(err + " in GetTweets");
            res.status(400);
        }
    }
}

module.exports.AddTweet = async (req, res) => {
    try {
        let tweetInstance = new Tweet({
            user: req.body.user,
            userName: req.body.userName,
            content: req.body.content,
            dateCreated: req.body.dateCreated,
            isDeleted: false
        });
        await tweetInstance.save(function(err, data){
            res.json(data);
        });
    }
    catch (err) {
        console.error(err + " in GetTweets (admin)");
        res.status(400);
    }
}

module.exports.DeleteTweet = async (req, res) => {
    try {
        await Tweet.findByIdAndUpdate({ _id: req._id },{ isDeleted: true }, function(err, data){
            res.json(data);
        });
    }
    catch (err) {
        console.error(err + " in GetTweets (admin)");
        res.status(400);
    }
}

