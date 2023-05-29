import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';

import { createServer } from 'http';


import authRouter from './routers/router.js';
import friendInvitationRouter from './routers/friends.js';

import { getSocketConnection } from './socketIOServer.js';
import connectDb from './config/db.js'






dotenv.config( { path: './config/.env' } );
const port = process.env.PORT || process.env.PORT;


//creating app instance
const app = express();


//createing http server passing express instance
const server = createServer( app );


//creating chat1 socket connection

getSocketConnection( server );








//database connectivity
connectDb();


//middlewares

app.use( cors() );
app.use( express.json() );
app.use( morgan( 'tiny' ) );






app.use( '/api/auth', authRouter );
app.use( 'api/friend-invitation', friendInvitationRouter );








//listeing on the port
//listening to server in place of app because over this http server we create both rest and socket api

server.listen( port, () =>
{

    console.log( `app is running on ${ port }` );

} )