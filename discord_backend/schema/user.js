import mongoose from "mongoose";

const userSchema = mongoose.Schema( {
    name: { type: String },
    email: { type: String },
    
} );

export default userSchema;