class ApiError extends Error {
  constructor(
    statusCode,
    stack,
    message = "Something went wrong",
    errors = []
  ) {
    super(message)((this.statusCode = statusCode)),
      (this.data = null),
      (this.success = false),
      (this.message = message),
      (this.errors = errors);

    if (this.stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
