import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './config/db.js'

import router from './routers/router.js';
import morgan from 'morgan';





import { createServer } from 'http';
import { Server } from 'socket.io'




dotenv.config( { path: './config/.env' } );
const port = process.env.PORT || process.env.PORT;


//creating app instance
const app = express();



//createing http server passing express instance
const server = createServer( app );


// creating socket io variable
// const io = new Server( server, () =>
// {
//     cors: {
//         origin: '*'
//     }
// } );
const io = new Server( server, {
    cors: {
        origin: '*'
    }
} );




//creating socket instances or groups lke api

io.on( 'connection', ( socket ) =>
{

    //conbnection status
    console.log( 'connected to socket ' );


    //creating tha chat group
    socket.on( 'chat', ( payload ) =>
    {
        console.log( payload );
        //creating emmit event
        io.emit( 'chat', payload );

    } );


} );







//database connectivity
connectDb();


//middlewares

app.use( cors() );
app.use( express.json() );
app.use( morgan( 'tiny' ) );






app.use( '/api/v1', router );








//listeing on the port
//listening to server in place of app because over this http server we create both rest and socket api

server.listen( port, () =>
{

    console.log( `app is running on ${ port }` );

} )