let userController = require('./user.controller');
let { asyncController } = require('../utils/utils.controller')

module.exports = (app) => {
    app.route("/api/user")
    .get(asyncController(userController.GetUsers));

    app.route("/api/user/add/:userId")
    .put(asyncController(userController.AddFollow));

    app.route("/api/user/remove/:userId")
    .put(asyncController(userController.RemoveFollow));

    app.route("/api/user")
    .post(asyncController(userController.CreateUser));

}