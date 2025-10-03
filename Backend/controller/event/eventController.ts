import { Request , Response , NextFunction } from "express";

export class EventController{
    
    static async registerNewEvent(req  : Request , res:Response , next : NextFunction){
        
        try{

        }
        catch(err){
            next(err);
        }
    }

}