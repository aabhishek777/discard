import User from "../models/UserModel.js";


export const getAllUsers = async ( req, res ) =>
{
    const _id = req._id;

    try
    {
        const users = await User.find( { _id: { $nin: _id } } );
        console.log( users );
        res.status( 200 ).json( { data: users } )
    } catch ( error )
    {
        res.status( 400 );
        console.log( error );


    }


    // const keyword = req.query.search
    //     ?
    //     {
    //         $or: [
    //             { userName: { $regex: req.query.search, $option: 'i' } },
    //             { email: { $regex: req.query.search, $option: 'i' } },
    //         ]
    //     }
    //     :
    //     {};


    // const users = await User.find( keyword );

    // console.log( users );


}