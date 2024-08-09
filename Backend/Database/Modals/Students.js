import mongoose from "mongoose";
const users= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        length:30,
    },
    email: {
        type: String,
        required : [true, "Please provide a unique email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    year:{
        type:String,
        required:true,
    },
    section:{
        type:String,
        required:true,
    }
  
})
module.exports=mongoose.model("users",users);
