const { config } = require('../../config/config');
const boom = require('@hapi/boom');

const withErrorStack = (error, stack) => {
  if (config.dev) {
    return { ...error, stack };
  }
  return error;
};

const logErrors = (err, req, res, next) => {
  console.log(err);
  next(err);
};

const boomrizedError = (err, req, res, next) => {
  if (!err.isBoom) {
    next(boom.badImplementation(err));
  }
  next(err);
};

//eslint-disable-next-line
const errorHandler = (err, req, res, next) => {
  const {
    output: { statusCode, payload }
  } = err;
  res.status(statusCode);
  res.json(withErrorStack(payload, err.stack));
};
module.exports = { logErrors, errorHandler, boomrizedError };
