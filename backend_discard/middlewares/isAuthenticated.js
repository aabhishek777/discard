import Jwt from "jsonwebtoken"


export const isAuthenticated = async ( req, res, next ) =>
{
    try
    {
        const token = req.headers.token;
        console.log( 'token from req' + token )
        if ( !token )
        {
            return res.status( 400 ).json( { msg: "Invalid Token" } )
        }
        const user = Jwt.verify( token, process.env.JWT_SECRET_KEY_JSON_WEB_TOKEN );
        if ( !user )
        {
            return res.status( 400 ).json( { msg: "Invalid Token" } )

        }
        req.userName = user.userName;
        req._id = user._id;
        console.log( req._id );
        req.token = token;
        next();

    } catch ( error )
    {
        console.log( error );
        res.status( 400 ).json( { msg: error } )
    }
}