import { Request, Response, NextFunction} from "express";
import { UserServices } from "../../services/user/userSevices";
import User from "../../models/user";

export class UserController {
    static async getAllUsers(req: Request, res: Response, next: NextFunction) {
        try {
            const response:unknown= await UserServices.getAllUsers();
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
            res.status(200).send("Success! User created!");
        }
        catch(err){
            next(err)   
        }
    }
}