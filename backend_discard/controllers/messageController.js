import Chat from "../models/ChatModel";
import Message from "../models/MessageModel";
import User from "../models/UserModel";


export const sendMessages = async ( req, res ) =>
{
    const { content, chatId } = req.body;
    if ( !content || !chatId )
    {
        console.log( "content or chat id isn't providede" );
        return res.status( 400 ).json( { msg: "error" } )
    }
    var newMessage = {
        sender: req.user._id,
        content,
        chat: chatId
    }

    try
    {
        var message = await Message.create( newMessage );
        message = await message.populate( 'sender', 'name pic' ).execPopulate();
        message = await message.populate( 'chat' ).execPopulate();
        message = await User.populate( message, {
            path: 'chat.users',
            select: 'name pic email'
        } );


        await Chat.findByIdAndUpdate( req.body.chatId, {
            latestMessage: message,
        } )

        res.json( message );
    } catch ( error )
    {
        console.log( error )
    }

}