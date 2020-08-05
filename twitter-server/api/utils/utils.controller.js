/**
 * Async middleware controller to catch and handle with express default handler all async controllers errors.
 * we get an input function called controllerFunc,
 * we return a new general async function that calls the input function in an async way. 
 * 
 * async functions:
 * req = the http request argument to the middleware function
 * res = the http response argument to the middleware function
 * next = callback to the middleware function. used to go back the previos function
 */
module.exports.asyncController = (controllerFunc) => async(req, res, next) => {
    try {
        await controllerFunc(req, res, next);
    }
    catch (error) {
        next(error);
    }
};