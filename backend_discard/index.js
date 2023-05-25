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






app.use( '/api/v1', router );








//listeing on the port


app.listen( port, () => {
    
    console.log( `app is running on ${port}` );
    
})