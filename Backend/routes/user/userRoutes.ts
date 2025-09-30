import { Router } from "express";
import { UserController } from "../../controller/user/userController";

const router=Router();

router.get("/all" , UserController.getAllUsers);
router.get("/:id" , UserController.getuserById);
router.post("/signup" , UserController.signup);

export default router;