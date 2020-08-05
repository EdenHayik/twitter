let config = require('../../config/config');
let Tweet = require('../tweet/tweet.model');
let User = require('../user/user.model');
let mongoose = require('mongoose');
const tweetRoute = require('./tweet.route');

/**
 * Async middleware controller to catch all async controllers errors
 */
module.exports.checkId = async(req, res, next) => {
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
                await Tweet.find({ $or: [{ name: req.user }, { user: {$in: followingArray} } ]}, function (err, data){
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

module.exports.DeleteTweet = async (req, res) => {
   
    if (req.user == config.admin_user) {
        try {
             //admin can delete every tweet
            await Tweet.findOneAndDelete({ _id: req._id }, function(err, data){
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
            //kind of overkill because delete button will not appear on another user's tweets
            await User.findOne({user: req.user}), function(err, user){
                followingArray = user.followingArray;
                //find all the tweets of people in the array or self
                //TODO: how to get current username to filter the delete query
                await Tweet.findByIdAndDelete({ _id: req._id}, function (err, data){
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
