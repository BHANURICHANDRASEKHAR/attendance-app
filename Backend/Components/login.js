import Student from '../Database/Modals/Student.js';
import express from 'express';
import env from 'dotenv';
import jwt from 'jsonwebtoken';
env.config();
const router=express.Router();
//Get cr details
router.get('/',async(req,res)=>{
    const {mail,username}=req.body;
    try{
        const data=await Student.findOne({mail:mail,username:username});
        if(!data) return res.status(404).json({msg:'User not found'});
        else{
             const token=tokencreattion(data)
             console.log(token);
             res.status(201).send({status:true,token:token,msg:"Login sucessfull"});
        }
    }
    catch(e)
    {
        console.log(e.message);
    }
})
function tokencreattion(user)
{
    
    const payload={
        user:{
            username:user.username ,
            mail:user.mail,
            section:user.section,
            year:user.year,
           
        }}
    const token=  jwt.sign(payload,process.env.key);

    return token;
}