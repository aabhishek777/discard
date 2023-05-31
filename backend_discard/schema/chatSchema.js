// import userSchema from "./user"

import mongoose from "mongoose";

// chatname
// isgroupChat
// userSchemalatestMessages
// goupAdmin


const chatSchema = mongoose.Schema(
    {
        chatName: {
            type: String,
            trim: true
        },
        isGroupChat: {
            type: Boolean,
            default: false,
        },
        users: [ {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        } ],
        latestMessages: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Message',

        },
        groupAdmin: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },

    },
    //creating timestamp
    {
        timeStamps: true,
    }

);

export default chatSchema;