const Sentry = require('@sentry/node');

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // Capture the error with Sentry
  Sentry.captureException(err);

  if (err.name === 'ValidationError') {
    return res.status(400).json({ message: 'Validation Error', errors: err.errors });
  }

  if (err.name === 'CastError') {
    return res.status(400).json({ message: 'Invalid ID format' });
  }

  res.status(500).json({ message: 'Internal Server Error' });
};

module.exports = errorHandler;
