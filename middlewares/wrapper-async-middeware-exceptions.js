const { wrapperMiddlewareExceptions } = require('./wrapper-middleware-exceptions');

// if it fill res.jsonBody with result of any DataBase Query
// and call next()

exports.wrapperAsyncMiddlewareExceptions = promise =>
	wrapperMiddlewareExceptions(
		(req, res, next) => {
      promise()
				.then(data => {
					res.jsonBody = data,
					next();
				})
				.catch(err => {

          var errorObj = {
            message: err.message
          };

          if(req.query['_debug_'] === 'true'){
            errorObj.stack = (err.stack || '').split('\n');
          }

          next({message: errorObj});
				});
		});
