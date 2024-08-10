import express from 'express';
import Student from '../Database/Modals/Students.js';
const router=express.Router();

router.post('/',async(req,res)=>{
    
    try{
        const {username,email,password,year,section,branch,strength}=req.body;
      
        const user=await Student.findOne({email});
        if(user){
            res.send({status:false,msg:"user alredy exist"});
        }else{
        const r= await Student.create({
            
            username,
            email,
            password,
            branch,
            year,
            section,
            strength,  
            
        });
        res.status(200).send({status:true,data:r,msg:"Sign_up success"});
    }
    }
    catch(err){
        console.log(err.message)
        res.status(501).send({status:false,msg:err.message});
    }

})
export default router;
// exports.Sign_in=async(req,res)=>{
//     try{
//         const {email,password}=req.body;
    
//         const user= await users.findOne({email});
      
//         if(user){
         
//             if(user.password!==password){
//                 res.status(201).send({status:false,msg:"Incorrect password"});
//             }
//             else{
 
//                 const token=tokencreattion(user)
//                 console.log(token);
//                 res.status(201).send({status:true,token:token,msg:"Login sucessfull"});
//                 }   
           
        
//         }else{  
//              res.status(200).send({status:false,msg:"User not exited"});

//         }  
//     }
//     catch(err){
       
//         res.send({Error:err.message});
//     }
// }


// exports.Auth=async(req,res)=>{
//     try{
//         const {token}=req.body;
//         if(!token){
//             res.status(200).send({status:false,msg:"Invalid token"});
//         }else{
//         const d=jwt.verify(token,"chandu");
//         req.user=d.user;

//         const user=await users.findOne({_id:d.user.id});
//         res.send({status:true,msg:"User Varified"});
        
//         }
//     }
//     catch(err){
//         res.status(200).send({status:false,msg:"Token expaired",Error:err.message});

//     }

// }

// exports.Forgetpassword=async(req,res)=>{

//     try{
        
//         const{email,password}=req.body;
//         console.log(req.body);
//         const user= await users.findOne({email});
//         console.log(user);
//         if(!user){
//             res.status(200).send({msg:"User not exits"});
//         }else{
//             const body={
//                 password:password
//             }
//           const payload= await users.updateOne({email:user.email},{$set:body});
         
//             if(payload.modifiedCount>=1) 
//             {
              
//               const token=  tokencreattion(user);
             
//               res.status(200).send({status:true,token:token,msg:"Password reset sucessfull"});
//             }
//             else{
//                 res.status(200).send({status:false,msg:"You given Previous Password"});
//             }

//             }
//     }catch(err){
//         console.log(err.message);
//         res.status(500).send({Error:err.message});

//                                                                                          }
// }
//  function tokencreattion(user)
// {
    
//     const payload={
//         user:{
//             username:user.username ,
//             UserId:user.id ,
           
//         }}
//     const token=  jwt.sign(payload,"chandu");

//     return token;
// }