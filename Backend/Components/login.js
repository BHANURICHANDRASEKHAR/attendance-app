import Users from '../Database/Modals/Users.js';
import express from 'express';
import env from 'dotenv';
import jwt from 'jsonwebtoken';
env.config();
const router=express.Router();
//Get cr details
router.get('/',async(req,res)=>{
    const {email,password}=req.query;
   
    try{
        const data=await Users.findOne({email:email,password:password});
        if(!data) return res.status(205).send({msg:'User not found'});
        else{
             const token=tokencreattion(data);
             res.status(201).send({status:true,token:token,data:data,msg:"Login sucessfull"});

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
            branch:user.branch,
            strength:user.strength
           
        }}
    const token=  jwt.sign(payload,process.env.key,{expiresIn:'1y'});

    return token;
}
export default router;