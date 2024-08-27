import express from 'express';
import errorHandler from './middlewares/errorHandler.middleware.js';
import userRouter from './routes/user.routes.js';

const app = express();

/**
 * Middleware to handle routes under the "/v1" path.
 * All routes defined in `userRouter` will be prefixed with "/v1".
 */
app.use("/v1", userRouter);

/**
 * Global error handling middleware.
 * This middleware will catch any errors thrown in the application
 * and send a JSON response with the error details.
 */
app.use(errorHandler);

/**
 * Catch-all route for handling undefined routes.
 * If a request is made to a route that is not defined, this middleware
 * will respond with a 404 status code and a JSON message indicating
 * that the route was not found.
 */
app.all('*', (req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

export default app;