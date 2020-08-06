const mongoose = require('mongoose');
const config = require('../config/config');

//Add promise support to mongoose 
mongoose.Promise = Promise;

//Initialize Mongoose
module.exports.connect = () => mongoose.connect(config.mongo_url, {useNewUrlParser: true, useUnifiedTopology: true})
.then ((conn) => {
    //Enabling mongoose debug mode if required
    const debug = ((process.env.MONGO_DEBUG) === 'true');
    mongoose.set('debug', debug);

    return conn;
});

module.exports.disconnect = () => mongoose.disconnect()
.then(() => {
    logger.debug('Disconnected from MongoDB: ${config.mongo_url}');
});