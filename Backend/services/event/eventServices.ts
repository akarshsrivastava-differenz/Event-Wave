import Event from "../../models/event/event";

export class EventServices{
    
    static async createEvent(eventData : Event){
        const newEvent = await Event.create(eventData);
            
    } 
}