import axios from "axios";
import { toastfail } from "../Attendance/send";
import { TimeTableSliceActions } from "../../Store/timtable";
export default async function getTimeTable(user,setloader,dispatch)
{
 
  const {branch,year,section}=user
  setloader(true)
  try{
    const res=await axios.get('https://attendance-app-0kvp.onrender.com/getStudentTimeTable',{
        params: {
            branch,year,section
        }
    })
    if(res.data.status){
     
      dispatch(TimeTableSliceActions.setTimetable(res.data.data))  
     setloader(false)
    }
    else{
      toastfail('No timetable found for this section')
      setloader(false)
    }
  }
  catch(error){
    toastfail('Error fetching timetable')
    setloader(false)
  }
  setloader(false)
}