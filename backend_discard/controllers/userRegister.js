import User from "../models/UserModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const userRegister = async ( req, res ) =>
{

    try
    {
        const { userName, email, password } = req.body;

        const userAlreadyExist = await User.exists( { email } );
        console.log( `userAlreadyExist :${ userAlreadyExist }` );
        if ( userAlreadyExist )
        {
            res.status( 409 ).json( { msg: "email already exists" } )
            return;
        }

        const hashPassword = await bcrypt.hash( password, 10 );
        console.log( hashPassword );

        const matched = await bcrypt.compare( password, hashPassword );
        console.log( `matched: ${ matched }` );

        const user = new User( {
            userName,
            email,
            password: hashPassword,
        } );

        //saving to db
        const userData = await user.save();
        console.log( userData );


        //generating jwt token and sending to user
        const token = await jwt.sign( {
            userName: userData.userName,
            email: userData.email,

        },
            process.env.JWT_SECRET_KEY_JSON_WEB_TOKEN,
            { expiresIn: '48h' }
        );


        res.status( 200 ).json( { msg: "registered success", token, data: userData } );



    } catch ( error )
    {
        res.status( 400 ).json( { msg: error } );

        console.log( error );
    }
};

export const getUser = async ( req, res ) =>
{
    try
    {
        console.log( 'getUser fetched' );
        res.status( 400 ).json( { msg: "user not found" } );
    }
    catch ( error )
    {
        console.log( error );

    }
};


export const loginUser = async ( req, res ) =>
{
    try
    {
        const { UserName, password } = req.body;

        const isNameExist = await User.exists( { UserName } );

        if ( !isNameExist )
        {
            console.log( `isnaemeexitst run` );
            res.status( 409 ).json( { msg: "Username not exist" } );
            return;
        }
        const userData = await User.findOne( { UserName } );


        const isPasswordMatched = await bcrypt.compare( password, userData.password );
        console.log( `ispasswordmatchwd : ${ isPasswordMatched }` );

        if ( !isPasswordMatched )
        {
            res.status( 409 ).json( { msg: "Username not exist" } );
            return;

        }
        //generating jwt token and sending it
        const token = await jwt.sign( {
            userName: userData.userName,
            email: userData.email,




        },
            process.env.JWT_SECRET_KEY_JSON_WEB_TOKEN,
            { expiresIn: '48h' }
        );
        console.log( token );

        res.status( 200 ).json( { msg: "login success", token, data: userData } );


    } catch ( error )
    {
        console.log( error );
        res.status( 400 ).json( { msg: error } );

    }
};



export const loadUser = async ( req, res ) =>
{
    try
    {
        const userName = req.userName;
        const userData = await User.findOne( { userName } );
        res.status( 200 ).json( { msg: 'user is Authenticated', data: userData } );

    } catch ( error )
    {
        res.status( 400 ), json( { msg: error } );
        console.log( error );
    }
};



//friend controllers


