/**
 * Returns HttpResponse, with status 500 (Internal Server Error).
 *
 * @param {any} res The HttpResponse parameter from your function.
 * @param {string} error The string with your custom error message, or with message from your catch property.
 * @return {any} The HttpResponse
 */
function errorHandler(res, error) {
    res.status(500).json({
        success: false,
        message: error.message ? error.message : error
    });
} 

module.exports.errorHandler = errorHandler;