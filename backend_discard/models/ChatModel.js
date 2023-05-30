import mongoose from "mongoose";
import chatSchema from "../schema/chatSchema.js";

const Chat = new mongoose.model( 'chat', chatSchema );

export default Chat;