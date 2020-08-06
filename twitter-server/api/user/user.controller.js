let config = require('../../config/config');
let User = require('../user/user.model');
let mongoose = require('mongoose');

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

module.exports.CreateUser = async (req, res) => {
    try {
        let userInstance = new User({
            user: req.body.user,
            userName: req.body.userName,
            followingArray: []
        });
        await userInstance.save(function(err, data){
            res.json(data);
        });
    }
    catch (err) {
        console.error(err + " in CreateUser ");
        res.status(400);
    }
}

module.exports.AddFollow = async (req, res) => {
    try {
        console.log(req.params)
        console.log(req.body);
        await User.findOneAndUpdate({_id: req.params.userId},{ $addToSet: { followingArray: req.body.user }}, function(err, data){
            res.json(data);
        });
    }
    catch (err) {
        console.error(err + " in AddFollow ");
        res.status(400);
    }
}


module.exports.RemoveFollow = async (req, res) => {
    try {
        console.log("remove follow")
        console.log(req.params)
        console.log(req.body);
        await User.findOneAndUpdate({_id: req.params.userId},{ $pull: { followingArray: req.body.user } }, function(err, data){
            res.json(data);
        });
    }
    catch (err) {
        console.error(err + " in AddFollow ");
        res.status(400);
    }
}
