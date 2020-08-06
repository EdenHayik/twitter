let userController = require('./user.controller');
let { asyncController } = require('../utils/utils.controller')

module.exports = (app) => {
    app.route('api/:userid')
    .get(tweetController.CheckId, asyncController(uesr.GetUsers));
    
}