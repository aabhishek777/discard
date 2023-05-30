import { Router } from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import { getAllUsers } from "../controllers/userController.js";


const router = Router();


router.get( '/', getAllUsers );


export default router;
