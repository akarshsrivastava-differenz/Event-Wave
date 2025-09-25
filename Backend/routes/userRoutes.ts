import { Router } from "express";
import { UserController } from "../controller/userController";

const router=Router();

router.get("/all" , UserController.getAllUsers);
router.get("/:id" , UserController.getuserById);

export default router;