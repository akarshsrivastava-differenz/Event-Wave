import { Request, Response, NextFunction} from "express";
import { UserServices } from "../../services/user/userSevices";
import User from "../../models/user/user";

export class UserController {
    
    static async getAllUsers(req: Request, res: Response, next: NextFunction) {
        try {
            const response = await UserServices.getAllUsers();
            if(!response){
                return res.status(404).json({msg : "Users not found or Invalid request!"});
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

    static async signup(req:Request , res : Response , next : NextFunction){
        const userData = req.body;
        try{
            const response=await UserServices.createUser(userData);
            res.status(200).json(response);
        }
        catch(err){
            next(err);
        }
    }

    static async login(req:Request , res:Response , next : NextFunction){
        const { email , password} = req.body;
        try{
            const response = await UserServices.loginUser(email , password);
        
            res.cookie("user_cookie" , response.jwtToken , {
                secure:true,
                httpOnly:true,
                maxAge:1000 * 60 * 60 * 24,
                sameSite:"strict"
            });
            res.status(200).json(response); 
        }
        catch(err){
            next(err);
        }
    }

    static async getMe(req:Request , res:Response , next:NextFunction){
       res.send("Hello!");
    }

}