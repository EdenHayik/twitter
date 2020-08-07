let userController = require('./user.controller');
let { asyncController } = require('../utils/utils.controller')

module.exports = (app) => {
    app.route("/api/user")
    .get(asyncController(userController.GetUsers));

    app.route("/api/user/:user")
    .get(asyncController(userController.GetUserData));

    //userId is the user id of myself. The name of the user to follow is in the request's body.
    app.route("/api/user/add/:userId")
    .put(asyncController(userController.AddFollow));

    app.route("/api/user/remove/:userId")
    .put(asyncController(userController.RemoveFollow));

    app.route("/api/user")
    .post(asyncController(userController.CreateUser));

}