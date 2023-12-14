// middleware to handle not found endpoints
const notFound = (req, res) => {
  const error = new Error(`Not Found ${req.originUrl}`);
  res.status(404);
  next(error);
};

// middleware to handle all types of error
const errorHandler = (err, req, res, next) => {
  let statusCode;
  console.log(err.message);
  if (err.message.includes("validation")) {
    statusCode = 400;
  } else {
    statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  }
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.statck,
  });
};

module.exports = { notFound, errorHandler };
