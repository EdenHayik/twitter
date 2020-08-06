require('dotenv').config();
let express = require('./lib/express');
let mongoose = require('./lib/mongoose');
let config = require('./config/config');
let app;

//if (config.peopleApiKey){
    try{
        if (config.mongo_url){
            mongoose.connect();
        }
        app = express.initServer();
    }
    catch(err){
        console.log(err + " can't init server");
    }
//}
//else {
//    console.log("can't initialize the server without people-api key");
//}

//load all api routes to server using glob lib
express.initRoutes(app);

//listen to port
express.listenToPort(app);