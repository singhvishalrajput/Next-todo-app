import mongoose from "mongoose"

export const ConnectDB = async() => {
    await mongoose.connect('mongodb+srv://vishalsingh:Birendra2004@cluster0.mtjcg.mongodb.net/todo-app')
    console.log("DB connected")
}