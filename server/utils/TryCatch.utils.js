/**
 * A higher-order function that wraps an asynchronous function with a try-catch block.
 * This ensures that any errors thrown by the asynchronous function are caught and passed
 * to the next middleware in the Express.js request-response cycle.
 *
 * @param {Function} content - The asynchronous function to be wrapped. It should accept
 *                             three parameters: req (the request object), res (the response object),
 *                             and next (the next middleware function).
 * @returns {Function} - A new function that wraps the provided asynchronous function with
 *                       a try-catch block.
 *
 * @example
 * // Usage in an Express.js route
 * const express = require('express');
 * const router = express.Router();
 * const tryCatch = require('./path/to/tryCatch');
 *
 * const someAsyncFunction = async (req, res) => {
 *     // Your asynchronous code here
 * };
 *
 * router.get('/some-route', tryCatch(someAsyncFunction));
 *
 * module.exports = router;
 */
const tryCatch = (content) => async (req, res, next) => {
    try {
        await content(req, res);
    } catch (error) {
        return next(error);
    }
};

export default tryCatch;