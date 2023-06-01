
import { Server } from 'socket.io'

import { verifySocketToken } from './middlewares/isAuthSocket.js';
import { newConnectionHandeller, removeUserHandeller } from './socketIo/newConnectionHandeller.js';
import { removeConnectedUser } from './socketIo/socketIOStore.js';

import jwt from 'jsonwebtoken'
import User from './models/UserModel.js'




export const getSocketConnection = ( server ) =>
{
    //creating server instance of socket io
    const io = new Server( server, {
        cors: {
            origin: '*'
        }
    } );


    //using socket middelware to authorisation purpose
    io.use( ( socket, next ) =>
    {
        verifySocketToken( socket, next );

    } );




    //creating socket instances or groups lke api

    io.on( 'connection', async ( socket ) =>
    {

        //conbnection status
        console.log( `connected to socket with socket Id : ${ socket.id }` );



        // new connection handellers

        newConnectionHandeller( socket, io );
        //updating  onine status 

        const { _id } = await jwt.verify( socket.handshake.auth.token, process.env.JWT_SECRET_KEY_JSON_WEB_TOKEN );
        console.log( _id );

        await User.findByIdAndUpdate( { _id: _id }, { $set: { isOnline: true } } );





        //handelling user disconnection
        socket.on( 'disconnect', async () =>
        {
            console.log( `user diconnected ${ socket.id }` );

            removeUserHandeller( socket.id );

            const { _id } = await jwt.verify( socket.handshake.auth.token, process.env.JWT_SECRET_KEY_JSON_WEB_TOKEN );


            await User.findByIdAndUpdate( { _id: _id }, { $set: { isOnline: false } } );
        } )

    } );

};



// // Handle user disconnection
// socket.on( 'disconnect', () =>
// {
//     const disconnectedUserId = Object.keys( users ).find(
//         ( key ) => users[ key ] === socket.id
//     );
//     if ( disconnectedUserId )
//     {
//         console.log( `User ${ disconnectedUserId } disconnected` );
//         delete users[ disconnectedUserId ];
//     }
// } );

// // Handle private messages
// socket.on( 'privateMessage', ( data ) =>
// {
//     const recipientSocketId = users[ data.recipientId ];
//     if ( recipientSocketId )
//     {
//         io.to( recipientSocketId ).emit( 'privateMessage', {
//             senderId: data.senderId,
//             message: data.message,
//         } );
//     }
// } );