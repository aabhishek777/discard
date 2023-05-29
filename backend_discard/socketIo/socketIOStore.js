

const connectedUsers = new Map();


export const addNewConnectedUser = ( { socketId, userName } ) =>
{
    connectedUsers.set( socketId, { userName } );
    console.log( `new user  connected  ` );
    console.log( connectedUsers );

};

export const removeConnectedUser = ( socketId ) =>
{
    if ( connectedUsers.has( socketId ) )
    {
        connectedUsers.delete( socketId );
        console.log( `a user has been delted with id: ${ socketId }` );
        console.log( connectedUsers );
    }
}