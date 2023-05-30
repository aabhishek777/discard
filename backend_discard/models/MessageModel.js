import mongoose from "mongoose";
import messageSchema from "../schema/messageSchema";




const Message = new mongoose.model( 'message', messageSchema );


export default Message;