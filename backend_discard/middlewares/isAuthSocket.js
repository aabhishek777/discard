import jwt from 'jsonwebtoken';

// here we verify the token frist and then send the response by which we can list i n frontend that the user is onlin or not
export const verifySocketToken = async ( socket, next ) =>
{
    // getting tocken coming from fromtend

    const token = socket?.handshake?.auth?.token;
    console.log( `tocken for socket jwt is : ${ token }` );
    try
    {
        const decodedToken = await jwt.verify( token, process.env.JWT_SECRET_KEY_JSON_WEB_TOKEN );

        socket.user = decodedToken;

        next(); 

    } catch ( error )
    {
        console.log( error );
        return;

    }


}