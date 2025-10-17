 import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../../../models/user/user";
export class UserValidator {

    static async verifyToken(req: Request, res: Response, next: NextFunction) {
        try {
            const cookie = req.cookies.user_cookie;
            if (!cookie) {
                return res.status(404).json({userId:null});
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
    static getUserId(req:Request , res:Response , next:NextFunction) {
        try{
            const token = req.headers.authorization?.split(" ")[1];
            if(!token){
                return res.status(200).json({userId : null});
            }
            const jwtSecret = process.env.JWT_KEY || "";
            const isValid = jwt.verify(token , jwtSecret);
            //@ts-expect-error
            req.userData = isValid;
            next();
        }
        catch(err){
            next(err);
        }
    }
    static async isOrganiser(req:Request , res:Response , next:NextFunction){
        try{
            //@ts-expect-error
            const userId = req.userData.userId;
            const response = await User.findOne({where:{
                user_id:userId,
            }});
        }
        catch(err){
            next(err);
        }
    }
}