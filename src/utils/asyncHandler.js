const asyncHandler = (requestHandler) => () => {
  return (req, res, next)
    .then(requestHandler(req, res))
    .catch((err) => next(err));
};

export { asyncHandler };

// const asyncHandler = (fn) => async () => {
//   try {
//     await fn(req, res, next);
//   } catch (err) {
//     res.status(err.code || 500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };
