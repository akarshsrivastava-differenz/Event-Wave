import { Request , Response , NextFunction } from "express";

export class UserValidator{
    
    static verifyToken(req : Request , res:Response , next:NextFunction){
        
        const cookie = req.cookies.user_cookie;
        console.log(cookie);
        next();
    }
}