import Student from "../../Database/Modals/Students.js";
import express from "express";
const router = express.Router();
const presnt=[4,27,21,25,15,25,28,33,31,27,30,19,34,29,12,13,26,27,26,25,36,25,34,2,37,5,3,24,30,23,41,25,25,6,13,28,5,16,2,24,25,22,24,38,15,38,26,19,33,33,23,2,19,30,5,31,25,12,18,28,30,26,13,29,19,10,29,36,26]

router.post('/postdataadmin', async (req, res) => {
    try {
      
        const studentRecord = await Student.findOne({ branch:"CSE", year:"4", section:"C" });
        if(!studentRecord)
        {
            res.status(404).json({ message: 'No student record found' });
            return;
        }
        else{
           
            studentRecord.StudentList.forEach((student,idx) => {
                student.totalAttendance=presnt[idx];
            });
            await studentRecord.save();
            res.status(200).json({ message: 'Attendance updated successfully' });
        }

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;
