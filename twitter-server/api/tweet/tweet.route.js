let tweetController = require('./tweet.controller');
let { asyncController } = require('../utils/utils.controller')

module.exports = (app) => {
    app.route('api/:userid')
    .post(tweetController.CheckId, asyncController(tweetController.AddTweet));

    app.route('api/:userid')
    .get(tweetController.CheckId, asyncController(tweetController.GetTweets));

    app.route('api/:tweetId')
    .delete(tweetController.CheckId, asyncController(tweetController.DeleteTweet));
    
    
}