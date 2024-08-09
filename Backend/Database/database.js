import mongoose from "mongoose";
import dotenv from 'dotenv';
// configure data
dotenv.config();

const MongooDB=()=>{
    try{
       mongoose.connect(process.env.link)
        .then(()=>{console.log("MongoDb connected")});
    
    }
    catch(err){
        console.log(err);
    }
}
export default MongooDB;