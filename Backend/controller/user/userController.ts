import { Request, Response, NextFunction } from "express";
import { UserServices } from "../../services/user/userSevices";
import { createHmac } from "node:crypto";

export class UserController {

    static async getAllUsers(req: Request, res: Response, next: NextFunction) {
        try {
            const response = await UserServices.getAllUsers();
            if (!response) {
                return res.status(404).json({ msg: "Users not found or Invalid request!" });
            }
            res.status(200).json(response);
        }
        catch (err) {
            next(err);
        }
    }

    static async getuserById(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params;
        try {
            const response = await UserServices.getUserById(id || "");
            res.status(200).json(response);
        }
        catch (err) {
            next(err);
        }
    }

    static async signup(req: Request, res: Response, next: NextFunction) {
        const userData = req.body;
        try {
            const response = await UserServices.createUser(userData);
            res.status(200).json(response);
        }
        catch (err) {
            next(err);
        }
    }

    static async login(req: Request, res: Response, next: NextFunction) {
        const { email, password } = req.body;
        try {
            const result = await UserServices.loginUser(email, password);

            res.cookie("user_cookie", result.jwtToken, {
                secure: true,
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24,
                sameSite: "strict",
                path:"/"
            });
            const response = {
                userId:result.userId,
                userEmail:result.userEmail,
                userRole:result.userRole
            }
            res.status(200).json(response);
        }
        catch (err) {
            next(err);
        }
    }

    static async getMe(req: Request, res: Response, next: NextFunction) {
        try {
            //@ts-expect-error
            const userData = req.userData;

            res.status(200).json({
                userId: userData.user_id,
                userRole: userData.user_role,
                userEmail: userData.user_email
            });
        }
        catch(err){
            res.status(500).json({
                msg:"Something went wrong!"
            });
        }
    }

    static logout(req:Request , res:Response , next:NextFunction){
        try{
            const cookieName=process.env.COOKIE_NAME || "";
            res.clearCookie("user_cookie" , { path:"/" } ); 
            res.status(204).json({msg:"Logout successfully!"});
        }
        catch(err){
            next(err);
        }
    }

}