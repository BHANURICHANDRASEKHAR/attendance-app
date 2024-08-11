import TimeTable from '../Database/Modals/TimeTable.js';
import express from 'express';
const router=express.Router();
//Get cr details
router.get('/',async(req,res)=>{
    const {section,year,branch}=req.query;
    
    try{
        const data=await TimeTable.findOne({section,year,branch});
       
        if(!data) return res.status(205).send({msg:'We will add Your class Time table ',status:false});
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