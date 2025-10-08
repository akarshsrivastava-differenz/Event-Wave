import { Request , Response , NextFunction } from "express";
import { UserServices } from "../../services/user/userSevices";

export class EventController{
    
    static async getAllEvents(req  : Request , res:Response , next : NextFunction){
        
        try{
            res.send("Working");
        }
        catch(err){
            next(err);
        }
    }

    static createNewEvent(req:Request , res:Response , next:NextFunction){
        try{
            //@ts-expect-error
            const userId = req.userData;
            console.log(userId);
            res.send("Hello!");
        }   
        catch(err){
            next(err);
        }     
    }

}