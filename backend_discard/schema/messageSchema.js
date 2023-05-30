import mongoose from "mongoose";



const messageSchema = mongoose.Schema( {
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    content: {
        type: String,
        trim: true,
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