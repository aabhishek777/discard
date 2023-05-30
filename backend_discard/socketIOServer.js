
import { Server } from 'socket.io'

import { verifySocketToken } from './middlewares/isAuthSocket.js';
import { newConnectionHandeller, removeUserHandeller } from './socketIo/newConnectionHandeller.js';
import { removeConnectedUser } from './socketIo/socketIOStore.js';




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

    io.on( 'connection', ( socket ) =>
    {

        //conbnection status
        console.log( `connected to socket with socket Id : ${ socket.id }` );



        // new connection handellers

        newConnectionHandeller( socket, io );

        //handelling user disconnection
        socket.on( 'disconnect', () =>
        {
            console.log( `user diconnected ${ socket.id }` );
            // removeConnectedUser( socket.id )
            removeUserHandeller( socket.id )
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