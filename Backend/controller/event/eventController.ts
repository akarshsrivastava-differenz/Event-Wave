import { Request , Response , NextFunction } from "express";
import { EventServices } from "../../services/event/eventServices";

export class EventController{
    
    static async getAllEvents(req  : Request , res:Response , next : NextFunction){
        
        try{
            const response = await EventServices.fetchAllEvents();
            res.status(200).send(response);
        }
        catch(err){
            next(err);
        }
    }

    static async createNewEvent(req:Request , res:Response , next:NextFunction){
        try{
            //@ts-expect-error
            const user_id = req.userData.user_id;
            const {eventDetails} = req.body;
            const response = await EventServices.createEvent(eventDetails , user_id);
            res.status(200).json(response);
        }   
        catch(err){
            next(err);
        }     
    }

    static async getEventForUser(req:Request , res:Response , next:NextFunction){
        try{
            //@ts-expect-error
            const {user_id} = req.userData;
            const response = await EventServices.fetchEventForUser(user_id);
            
            res.status(200).json(response);
        }
        catch(err){
            next(err);
        }
    }

}