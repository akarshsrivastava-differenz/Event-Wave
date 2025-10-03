import z from "zod";

export const eventSchema = z.object({
    event_id:z.uuidv4(),
    event_title:z.string(),
    event_description:z.string(),
    event_category:z.literal(["Conference" , "Workshop" , "Concert" , "Festival" , "Networking"]),
    event_start_date:z.date(),
    event_end_date:z.date(),
    event_start_time:z.iso.time(),
    event_end_time:z.iso.time(),
    event_venue_address:z.string(),
    event_price:z.number(),
    event_quantity:z.number()
});

export type Event = z.infer<typeof eventSchema>;