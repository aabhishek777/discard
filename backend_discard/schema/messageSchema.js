import mongoose from "mongoose";



const messageSchema = mongoose.Schema( {
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    content: {
        type: String,
        trim: true,
    },
    recieverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    chat: {
        type: mongoose.Schema.Types.OnbjectId,
        ref: 'Chat'
    }
},

    {
        timeStapms: true,
    } );


export default messageSchema;