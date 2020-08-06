let config = require('../../config/config');
let User = require('../user/user.model');
let mongoose = require('mongoose');

/**
 * Async middleware controller to catch all async controllers errors
 */
module.exports.CheckId = async(req, res, next) => {
    if (mongoose.Types.ObjectId.isValid(req.params.id)){
        return next();
    }
}

module.exports.GetUsers = async (req, res) => {
    try {
        await User.find({}, function(err, data){
            res.json(data);
        });
    }
    catch (err) {
        console.error(err + " in GetUsers (admin)");
        res.status(400);
    }
}
