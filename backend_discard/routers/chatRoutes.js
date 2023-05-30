import { Router } from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import { acessChat, creatGroupChat, fetchChats } from "../controllers/chatController.js";



const router = Router();


router.post( '/', acessChat );

router.get( '/', fetchChats );

router.post( '/group', creatGroupChat );



export default router;