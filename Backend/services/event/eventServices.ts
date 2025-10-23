import Event from "../../models/event/event";
import User from "../../models/user/user";
import { AppError } from "../../utils/AppError";
export class EventServices {

    static async createEvent(eventDetail: Event, user_id: string) {
        try {
            const newEvent = await Event.create({ ...eventDetail, user_id });
            if (!newEvent) {
                throw new AppError(500, "Something went wrong at server!");
            }
            return { eventId: newEvent.event_id };
        }
        catch(err){
            throw err;
        }
    }

    static async fetchAllEvents() {
        try{
            const result = await Event.findAll({include:{
                model:User,
                as:"organiser",
                attributes:['first_name' , 'last_name']
            }});

            return result;
        }
        catch(err){
            throw err;
        }
    }

    static async fetchEventForUser(user_id:string){
        try{
            const result = await Event.findAll({where:{
                user_id:user_id
            }});
            
            if(!result){
                throw new AppError(404 , "Something went wrong or invalid request");
            } 
            
            return result;
        }
        catch(err){
            throw err;
        }
    }
}