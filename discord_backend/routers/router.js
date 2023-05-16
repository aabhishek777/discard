import { Router } from 'express'
import { userRegister } from '../controllers/userRegister.js';
import User from '../models/UserModel.js';

const router = Router();

router.post( '/register', async ( req, res ) => {
    
    try {
        
        // const { name, email } = req.body();
        const user = new User( {
            name:'praveen2',
            email:'email.com'
        } )
        user.save();
        console.log( `user registered successfully` );
        res.status(201).json({msg:'success'})

        
    } catch ( error ) {
        res.status( 400 ).json( { msg: error } );

        console.log( error );
    }
} );


export default router;