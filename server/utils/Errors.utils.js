/**
 * This module defines custom error classes for the application.
 * These error classes extend the built-in Error class and provide additional
 * properties and methods to handle specific error scenarios.
 */

/**
 * Represents a custom error class for handling 'Not Found' errors.
 * Extends the built-in Error class.
 * @constructor
 * @param {string} message - The error message.
 * @property {string} name - The name of the error ('NotFoundError').
 * @property {number} statusCode - The status code associated with the error (404).
 */
export class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotFoundError';
    this.statusCode = 404;
  }
}

/**
 * Represents an error indicating invalid credentials.
 * @constructor
 * @param {string} message - The error message.
 * @property {number} statusCode - The HTTP status code for unauthorized access (401).
 */
export class InvalidCredentialsError extends Error {
  constructor(message) {
    super(message);
    this.name = 'InvalidCredentialsError';
    this.statusCode = 401; // 401 Unauthorized
  }
}
