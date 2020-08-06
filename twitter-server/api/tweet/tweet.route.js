let tweetController = require('./tweet.controller');
let { asyncController } = require('../utils/utils.controller')

module.exports = (app) => {

    //not a delete route because tweets are not really being deleted
    app.route('/api/tweet/:tweetId')
    .put(asyncController(tweetController.DeleteTweet));

    app.route('/api/tweet')
    .post(asyncController(tweetController.CreateTweet));

    app.route('/api/tweet/:user')
    .get(asyncController(tweetController.GetTweets));

    
    
    
      
}