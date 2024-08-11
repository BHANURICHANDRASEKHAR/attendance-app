import TimeTable from "../../Database/Modals/TimeTable.js";
import data from './data.js';
import express from 'express';
const router=express.Router();
export default router.post('/',async(req,res)=>{
      
      TimeTable.create(data)
      .then(() => {
        res.status(200).send('Data inserted successfully');
        
      })
      .catch((err) => {
        console.error('Error inserting data:', err);
      });


})