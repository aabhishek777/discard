import { Router } from "express";
import { saveChat } from "../controllers/messageController.js";
import { isAuthenticated } from '../middlewares/isAuthenticated.js'



const router = Router();

router.post( '/save-chat', saveChat );