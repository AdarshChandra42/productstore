import mongoose from 'mongoose';
//this mongoose package makes it easier to interact with MongoDB database (which is a NoSQL database)


export const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongDB connected: ${conn.connection.host}`);
    }catch (error){
        console.log(`Error: ${error.message}`);
        process.exit(1); //1 means failure but 0 means success
    }
}