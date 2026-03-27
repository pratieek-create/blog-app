const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // logs the full error in your terminal

  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode).json({
    message: err.message,
    // only show detailed error info during development
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

module.exports = errorHandler;