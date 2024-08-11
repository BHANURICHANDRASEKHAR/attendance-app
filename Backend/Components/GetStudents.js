import Students from "../Database/Modals/Students.js";
import express from 'express';
const router=express.Router();
//Get cr details
router.get('/',async(req,res)=>{
    const {section,year,branch}=req.query;
    console.log(section)
    try{
        const data=await Students.findOne({section,year,branch});
       
        if(!data) return res.status(205).send({msg:'User not found'});
        else{
            
             res.status(201).send({status:true,data:data});
        }
    }
    catch(e)
    {
        console.log(e.message);
    }
})
export default router;