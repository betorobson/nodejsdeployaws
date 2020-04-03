const { wrapperMiddlewareExceptions } = require('./wrapper-middleware-exceptions');

// if it fill res.jsonBody with result of any DataBase Query
// and call next()

exports.wrapperDBQueryControllerAsMiddleware = controller =>
	wrapperMiddlewareExceptions(
		(req, res, next) => {
			controller(req, res, next)
				.then(data => {
					res.jsonBody = data,
					next();
				})
				.catch(err => {
					next(err);
				});
		});
