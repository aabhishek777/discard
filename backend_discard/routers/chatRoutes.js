import { Router } from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import { acessChat, addToGroup, creatGroupChat, fetchChats, removeFromGroup, renameGroup } from "../controllers/chatController.js";



const router = Router();


router.post( '/', acessChat );

router.get( '/', fetchChats );

router.post( '/group', creatGroupChat );

router.put( '/rename', renameGroup );

router.put( '/groupadd', addToGroup );

router.put( '/groupremove', removeFromGroup );



export default router;