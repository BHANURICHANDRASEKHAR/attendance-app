import Students from "../../Database/Modals/Students.js";
import data from './data.js';
import express from 'express';
const router=express.Router();
export default router.post('/admin/students',async(req,res)=>{
      // Create a new student object
const newStudent = new Students({
   
  branch: 'CSE',
  year: "4",
  section: "c",
  StudentList: data
});

await newStudent.save()
  .then((student) => {
   res.send({msg:"Student added successfully:", student});
  })
  .catch((error) => {
    console.error("Error adding student:", error.message);
  });


})