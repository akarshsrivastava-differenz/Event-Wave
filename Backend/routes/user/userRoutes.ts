import { Router } from "express";
import { UserController } from "../../controller/user/userController";

const userRouter=Router();

userRouter.get("/all" , UserController.getAllUsers);
userRouter.get("/:id" , UserController.getuserById);
userRouter.post("/signup" , UserController.signup);

export default userRouter;