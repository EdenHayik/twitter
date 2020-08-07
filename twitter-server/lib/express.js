let bodyParser = require('body-parser');
let express = require('express');
let config = require('../config/config');
let path = require('path');
let glob = require('glob');
let helmet = require('helmet');
let cors = require('cors');

/**
 * init the express server
 */
module.exports.initServer = () => {
    app = express();
    initMiddlewares(app);
    setServerFolderLoc(app);
    setViewEngine(app);
    app.use(cors());
    app.use(helmet());
    return app;
};

/**
 * init all middlewares
 */
initMiddlewares = (app) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    // app.use((req,res,next) => {
    //     console.log(req.url);
    //     req.userName = config.admin_user;
    //     next();
    // });
    
    //app.use(basicAuth());
}

/**
 * listen to the port described in config.js
 */
module.exports.listenToPort = (app) => {
    let port = config.port;
    app.listen(port);
    console.log(`Server is running on port ${port}.`);
}

/**
 * set the important folders of the server
 */
setServerFolderLoc = (app) => {
    app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));
}

/**
 * set the view engine
 */
setViewEngine = (app) => {
    app.set('view engine', 'ejs');
}

/**
 * init the api's .route files from the api folders
 */
module.exports.initRoutes = (app) => {
    const paths = glob.sync("api/*/*.route.js");
    for (routePath of paths) {
        let route = require(path.join(__dirname, '../', routePath));
        route(app);
    }
}