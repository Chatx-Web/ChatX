/**
 * Middleware function to handle errors in the application.
 * 
 * @param {Object} error - The error object containing details about the error.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function in the stack.
 * 
 * @returns {void} Sends a JSON response with the error details and status code.
 */
const errorHandler = (error, req, res, next) => {
    const statusCode = error.statusCode || 500;
    res.status(statusCode).json({ 
        message: error.message || 'Internal Server Error', 
        success: false,
        error: error
    });
}

export default errorHandler;