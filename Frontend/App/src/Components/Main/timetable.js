import axios from "axios";
import { toastfail } from "../Attendance/send";
export default async function getTimeTable(user,setloader,settimetable)
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
      settimetable(res.data.data)
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