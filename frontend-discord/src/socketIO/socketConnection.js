
import io from 'socket.io-client'



export const getSocketConnection = ( token ) =>
{

    const socket = io( 'http://localhost:9999', {
        auth: {
            token,
        }
    } );

    socket.on( 'connect', () =>
    {

        console.log( `connected successfully with socket with ${ socket.id }` );

    } );
}