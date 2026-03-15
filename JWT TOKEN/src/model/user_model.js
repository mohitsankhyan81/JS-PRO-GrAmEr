import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email is required"]
    },
    password:{
        type:String,
        required:true
    }
})

export const User=mongoose.model("User",userSchema)