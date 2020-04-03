exports.wrapperMiddlewareExceptions = (run, id) => {

	return (req, res, next) => {
		try{

			run(req, res, next);

		}catch(err){

			// catch any expection

			// normalize obj
			var errorObj = {
				unexpectedErrorCode: id || 'unidentified',
				message: err.message || ''
			};

			if(req.query['_debug_'] === 'true'){
				errorObj.stack = (err.stack || '').split('\n');
			}

			next({message: errorObj});

		}

	};

};
