import Chat from "../models/ChatModel.js";
import User from "../models/UserModel.js";


export const acessChat = async ( req, res ) =>
{
    const { userId } = req.body;
    console.log( userId );
    console.log( req.body );


    if ( !userId )
    {
        console.log( `userId not sent with params:${ userId }` );
        res.status( 400 ).json( { msg: 'userId not send' } )

    }
    let isChat = await Chat.find( {
        isGroupChat: false,
        $and: [
            { users: { $elemMatch: { $eq: req.user._id } } },
            { users: { $elemMatch: { $eq: userId } } }
        ]
    } )
        .populate( 'users', '-password' )
        .populate( 'latestMessage' );

    isChat = await User.populate( isChat, {
        path: 'latestMessage.sender',
        select: 'name pic email'
    } );

    if ( isChat.length > 0 )
    {
        res.status( 200 ).json( { data: isChat[ 0 ] } );
    }
    else
    {
        let chatData = {
            chatName: 'sender',
            isGroupChat: false,
            users: [
                req.user._id,
                userId ],
        };

        try
        {
            const createChat = await Chat.create( chatData );
            const FullChat = await Chat.findOne( {
                _id: createChat._id
            } )
                .populate( 'users', '-password' );

            res.status( 200 ).json( { FullChat } )
        } catch ( error )
        {
            console.log( error );

        }
    }
}


export const fetchChats = async ( req, res ) =>
{

    try
    {
        const result = await Chat.find( { chatName: "chat name db" } );

        res.status( 200 ).json( { data: result, msg: "msg" } );
    } catch ( error )
    {
        console.log( error );
        res.status( 400 ).json( { msg: error, } );
    }
}


export const creatGroupChat = async ( req, res ) =>
{
    try
    {


        if ( !req.body.users && !req.body.name )
        {
            return res.status( 400 ).json( { msg: "more than 2 are required for group chat" } )
        }
        var users = JSON.parse( req.body.users );
        if ( users.length < 2 )
        {
            return res.status( 400 ).json( { msg: "more than 2 are required for group chat" } )
        }
        users.push( req.user );


        const groupChat = await Chat.create( {
            chatName: req.body.name,
            users,
            isGroupChat: true,
            groupAdmin: req.user,
        } );

        const fullGroupChat = await Chat.findOne( { _id: groupChat._id } )
            .populate( 'users', '-password' )
            .populate( 'groupAdmin', '-password' )


        res.status( 200 ).json( fullGroupChat );

    } catch ( error )
    {
        console.log( error );
        res.status( 400 ).json( { msg: error } );

    }
}

export const renameGroup = async ( req, res ) =>
{
    const { chatId, chatName } = req.body;

    const updatedChat = await Chat.findAndUpdateById( ( chatId ), { chatName, }, { new: true } )
        .populate( 'users', '-password' )
        .populate( 'groupAdmin', '-password' )
        ;

    if ( !updatedChat )
    {
        res.status( 400 );
        throw new Error( 'Chat not found' )
    }
    else
    {
        res.json( updatedChat )
    }

};

export const addToGroup = async ( req, res ) =>
{
    const { chatId, userId } = req.body;

    const added = await Chat.findAndUpdateById( ( chatId ), { $push: { users: userId } }, { new: true } )
        .populate( 'users', '-password' )
        .populate( 'groupAdmin', '-password' )
        ;


    if ( !added )
    {
        res.status( 400 );
        throw new Error( 'Chat not found' )
    }
    else
    {
        res.json( added )
    }

};

export const removeFromGroup = async ( req, res ) =>
{
    const { chatId, userId } = req.body;

    const removed = await Chat.findAndUpdateById( ( chatId ), { $push: { users: userId } }, { new: true } )
        .populate( 'users', '-password' )
        .populate( 'groupAdmin', '-password' )
        ;


    if ( !removed )
    {
        res.status( 400 );
        throw new Error( 'Chat not found' )
    }
    else
    {
        res.json( removed )
    }

};

