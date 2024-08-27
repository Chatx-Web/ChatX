import express from 'express';
import { login, register, test } from '../controllers/user.controller.js';
import tryCatch from '../utils/TryCatch.utils.js';

const router = express.Router();

/**
 * Array of public routes with their respective paths, HTTP methods, and handlers.
 * Each route object contains:
 * - `path`: The URL path for the route.
 * - `method`: The HTTP method to be used (e.g., 'get').
 * - `handler`: The controller function that handles the route.
 */
const publicRoutes = [
    {
        path: '/test',
        method: 'get',
        handler: test
    },
    {
        path: '/login',
        method: 'get',
        handler: login
    },
    {
        path: '/register',
        method: 'get',
        handler: register
    }
];

/**
 * Iterates over each route in the `publicRoutes` array and sets up the route in the Express router.
 * The `tryCatch` utility is used to wrap each handler function to handle any errors that occur during execution.
 * 
 * @param {string} path - The URL path for the route.
 * @param {string} method - The HTTP method to be used (e.g., 'get').
 * @param {function} handler - The controller function that handles the route.
 */
publicRoutes.forEach(({ path, method, handler }) => {
    router[method](path, tryCatch(handler));
});

export default router;