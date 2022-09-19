const ApiError = require('./api-error');

function apiErrorHandler(err, req, res, next) {
  if (err instanceof ApiError) {
    return res.status(err.code).json(err.message);
  }
  return res.status(500).json(ApiError.internal('something went wrong'));
}

module.exports = apiErrorHandler;
