import { Request, Response, NextFunction } from "express";
import { UserServices } from "../services/userSevices";

export class UserController {
    static getAllUsers = (req: Request, res: Response, next: NextFunction) => {
        try {
            res.send("Fetched all users!");
        }
        catch (err: unknown) {
            next(err);
        }
    }

    static getuserById = (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;
        try {
            res.send(`User id with ${id} has been fetched!`);
        }
        catch (err) {
            next(err);
        }
    }
}