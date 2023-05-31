import { Router } from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import { getAllUsers } from "../controllers/userController.js";


const router = Router();


router.get( '/', isAuthenticated, getAllUsers );


export default router;
