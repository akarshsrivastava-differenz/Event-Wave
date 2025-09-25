import { Request, Response, NextFunction } from "express";
import { UserServices } from "../services/userSevices";
import { IUser } from "../models/user";

export class UserController {
    static getAllUsers = (req: Request, res: Response, next: NextFunction) => {
        try {
            const usersData: IUser[] = UserServices.getAllUsers();
            if (!usersData) {
                res.status(404).json({ msg: "Users does not exist or Something went wrong!" });
            }
            res.status(200).json(usersData);
        }
        catch (err: unknown) {
            next(err);
        }
    }

    static getuserById = (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;
        try {
            if (!id) {
                return res.status(404).send("User not found!");
            }
            const user = UserServices.getUserById(id);
            if (!user) {
                return res.status(400).send("User not found!");
            }
            res.status(200).json(user);
        }
        catch (err) {
            next(err);
        }
    }
}