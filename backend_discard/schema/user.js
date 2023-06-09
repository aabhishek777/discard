import mongoose from "mongoose";

const userSchema = mongoose.Schema( {
    userName: { type: String, required: true },
    email: { type: String },
    password: { type: String },

    pic: {
        type: String,
        default: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
    },
    isOnline: {
        type: Boolean,
        default: false,
    }

},
    { timestamps: true },
);

export default userSchema;