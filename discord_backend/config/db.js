import mongoose from "mongoose";

 const connectDB = async () => {
    try {
        await mongoose.connect( process.env.MONGO_URI );
        console.log( 'server is connected to the database successfully' );
        
    }
    catch ( error ) {
        console.log( error );
    }
};
export default connectDB;