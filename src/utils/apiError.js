class ApiError extends Error {
    constructor(
        statusCode, 
        message = 'Something went wrong', 
        errors = [], 
        stack = ""
    ) {
        super(message);  // Call the parent class (Error) constructor with the message
        this.statusCode = statusCode;
        this.data=null
        this.message=message
        this.success=false  // Store the status code
        this.errors = errors;  // Additional error details
        if (stack) {
            this.stack = stack;  // Optionally override the stack trace
        } else {
            Error.captureStackTrace(this, this.constructor);  // Capture the current stack trace
        }
    }
}

export {ApiError}
