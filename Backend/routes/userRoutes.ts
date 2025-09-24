import { Router } from "express";
import { getAllUsers } from "../controller/userController";

const router=Router();

router.get("/all" , getAllUsers);

export default router;