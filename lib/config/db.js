import mongoose from "mongoose"

export const ConnectDB = async() => {

    const dbUri = process.env.MONGODB_URI;
    
    await mongoose.connect(dbUri)
    console.log("DB connected")
}