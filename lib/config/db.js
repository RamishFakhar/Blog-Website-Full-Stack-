import mongoose from "mongoose";


export const ConnectDB = async ()=>{

    await mongoose.connect('mongodb+srv://fullstack:11223344@cluster0.5smjc.mongodb.net/BLOG-APP');
    console.log("DB Connected");
    
}