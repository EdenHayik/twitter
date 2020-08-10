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
    // if (req.user == config.admin_user) {
    //     try {
    //         await Tweet.find({}, function(err, data){
    //             res.json(data);
    //         });
    //     }
    //     catch (err) {
    //         console.error(err + " in GetTweets (admin)");
    //         res.status(400);
    //     }
    // }
    // else {
        try {
            //find the user's properties and get the follow list
            console.log(req.params.user)
            await User.findOne({user: req.params.user}, function(err, userData){
                followingArray = userData.followingArray;
                //find all the tweets of people in the array or self that are not deleted
                Tweet.find({$and: [{isDeleted: false},{ $or: [{ user: req.params.user }, { user: {$in: followingArray} } ]}]}, function (err, data){
                    res.json(data);
                });
            });
        }
        catch (err) {
            console.error(err + " in GetTweets");
            res.status(400);
        }
    }
// }

module.exports.CreateTweet = async (req, res) => {
    try {
        let tweetInstance = new Tweet({
            user: req.body.user,
            userName: req.body.userName,
            content: req.body.content,
            dateCreated: Date.now(),
            //dateCreated: req.body.dateCreated,
            isDeleted: false
        });
        await tweetInstance.save(function(err, data){
            res.json(data);
        });
    }
    catch (err) {
        console.error(err + " in CreateTweet");
        res.status(400);
    }
}

module.exports.DeleteTweet = async (req, res) => {
    try {
        await Tweet.findByIdAndUpdate({ _id: req.params.tweetId },{ isDeleted: true }, function(err, data){
            res.json(data);
        });
    }
    catch (err) {
        console.error(err + " in DeleteTweet");
        res.status(400);
    }
}

