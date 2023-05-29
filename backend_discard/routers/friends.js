

import { Router } from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
import { friendsInvite } from "../controllers/friendsInvitationCotroller.js";

const router = Router();


router.post( '/invite', isAuthenticated, friendsInvite );




export default router;