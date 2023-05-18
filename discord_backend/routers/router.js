import { Router } from 'express'
import { getUser, loginUser, userRegister } from '../controllers/userRegister.js';
import User from '../models/UserModel.js';

const router = Router();

router.post( '/register', userRegister);


router.get( '/user', getUser );


router.post( '/login', loginUser );


export default router;