import mongoose from "mongoose";
const AbsentList=new mongoose.Schema({
    time:{
        type:String,
        required:true
    }
    ,
    date:{
        type:String,
        required:true
    }
    ,
    shift:{
        type:String,
        required:true
    },
    section:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    absents:{
        type: [String],
        required: true
    }
})
export default mongoose.model("AbsentList",AbsentList);