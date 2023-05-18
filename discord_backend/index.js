import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './config/db.js'
import User from './models/UserModel.js';
import router from './routers/router.js';
import morgan from 'morgan';






//creating app instance

const app = express();

 
dotenv.config( { path: './config/.env' } );
const port = process.env.PORT || process.env.PORT;


//database connectivity
connectDb();


//middlewares

app.use( cors() );
app.use( express.json() );
app.use( morgan('tiny') );





//api calls

// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// } );
  
// app.get('/a',async ( req, res ) => {
    
//     try {
//         // const { name, email } = req.body();
//         const user = new User( {
//             name:'praveen',
//             email:'email.com'
//         } )
//         await user.save();
//         console.log( `user registered successfully` );
//         res.status(201).json({msg:'success'})

        
//     } catch ( error ) {
//         res.status( 400 ).json( { msg: error } );

//         console.log( error );
//     }
// } )
app.use( '/api/v1', router );








//listeing on the port


app.listen( port, () => {
    
    console.log( `app is running on ${port}` );
    
})