

export const friendsInvite = async ( req, res ) =>
{


    const { mail } = req.body;
    try
    {
        res.status( 200 ).json( { msg: "success frienInvite " } )
    } catch ( error )
    {
        console.log( error );

    }
}