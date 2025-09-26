import { Request, Response, NextFunction } from "express"

interface HttpError extends Error {
    statusCode: number;
}

class ErrorHandler {
    static errorHandler = (err: HttpError, req: Request, res: Response, next: NextFunction) => {
        console.error(err.stack);
        const statusCode = err.statusCode || 500;
        const errMsg = err.message || "Something went wrong!";
        res.status(statusCode).json({ "success": false, code: statusCode });
    }
}