

import { Server } from 'socket.io';



export const getSocketConnection = ( server ) =>
{

    const io = new Server( server, {
        cors:
        {
            origin: '*',
        }
    } );

    io.on( 'connection', ( socket ) =>
    {
        console.log( `scket connection established with socket id : ${ socket.id }` );

        //methods

        io.on( 'chat', ( payload ) =>
        {

            console.log( payload )
            io.emit( 'chat', payload );

        } );
    } );

}