import User from "../models/UserModel.js";


export const getAllUsers = async ( req, res ) =>
{


    const keyword = req.query.search
        ?
        {
            $or: [
                { userName: { $regex: req.query.search, $option: 'i' } },
                { email: { $regex: req.query.search, $option: 'i' } },
            ]
        }
        :
        {};


    const users = await User.find( keyword );

    console.log( users );


}