import { Request, Response, NextFunction } from "express"

export class LoggerMiddleware {
    static logger = (req: Request, res: Response, next: NextFunction) => {
        console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
        next();
    }
}