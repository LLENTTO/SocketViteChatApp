import mongoose from "mongoose"

export const connectDB = async ()  => {
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB connecte to port ${process.env.MONGODB_URI}`)
    }
    catch(error){
        console.log("MongoDB connection error:",error)
    }
}