import Absentlist from "../Database/Modals/AbsentList.js";

import express from 'express';
const router = express.Router();
export default router.post('/', async (req, res) => {
    const {date,time,shift,section,year,branch,absentList}=req.body.data;
    console.log(req.body);
   try{
    const r= await Absentlist.create({
         time,
         date,
         shift,
         section,  
         year,
         branch, 
         absents:absentList
        
    });
    res.status(200).send({status:true});
   }
   catch(e)
   {
    console.log(e.message)
    res.status(501).send({status:false,msg:'Internal Error'});
   }

})