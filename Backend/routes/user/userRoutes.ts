import { Router } from "express";
import { UserController } from "../../controller/user/userController";
import { UserValidator } from "../../middleware/validators/user/user";

const userRouter=Router();

userRouter.get("/all" , UserController.getAllUsers);
userRouter.post("/signup" , UserController.signup);
userRouter.post("/login" , UserController.login);
// userRouter.get("/logout" , UserController.logout);

userRouter.get("/:id" , UserController.getuserById);

export default userRouter;