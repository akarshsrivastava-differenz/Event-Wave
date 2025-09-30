import z from "zod";

export const userSchema = z.object({
    user_id:z.uuidv4(),
    first_name:z.string(),
    last_name:z.string(),
    email:z.email(),
    hashed_password:z.string(),
    role:z.literal(["attendee" , "organizer"]),
    phone_number:z.string()
});

type User = z.infer<typeof userSchema>