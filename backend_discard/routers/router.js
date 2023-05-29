import { Router } from 'express'
import
{

    getUser,
    loadUser,
    loginUser,
    userRegister
}
    from '../controllers/userRegister.js';



import { isAuthenticated } from '../middlewares/isAuthenticated.js';




const router = Router();





router.post( '/register', userRegister );


router.get( '/user', getUser );


router.post( '/login', loginUser );


router.post( '/load', isAuthenticated, loadUser );





export default router;