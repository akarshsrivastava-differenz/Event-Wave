import { Router } from "express";
import { EventController } from "../../controller/event/eventController";
import { UserValidator } from "../../middleware/validators/user/user";

const eventRouter = Router();

eventRouter.get("/all" , EventController.getAllEvents);
eventRouter.post("/create" , UserValidator.verifyToken , EventController.createNewEvent);

export default eventRouter;