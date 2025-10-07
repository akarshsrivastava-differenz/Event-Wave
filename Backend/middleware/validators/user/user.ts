import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
export class UserValidator {

    static async verifyToken(req: Request, res: Response, next: NextFunction) {
        try {
            const cookie = req.cookies.user_cookie;
            if (!cookie) {
                return res.status(200).json({userId:null});
            }
            const jwtSecret = process.env.JWT_KEY || "";
            const isValidToken = jwt.verify(cookie, jwtSecret);
            //@ts-expect-error
            req.userData = isValidToken;
            next();
        }
        catch (err) {
            next(err);
        }
    }
}