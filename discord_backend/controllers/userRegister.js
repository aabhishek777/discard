import User from "../models/UserModel.js";

 export const userRegister = async ( req, res ) => {
    
    try {
        // const { name, email } = req.body();
        const user = new User( {
            name:'praveen',
            email:'email.com'
        } )
        user.save();
        console.log( `user registered successfully` );
        res.status(201).json({msg:'success'})

        
    } catch ( error ) {
        res.status( 400 ).json( { msg: error } );

        console.log( error );
    }
}