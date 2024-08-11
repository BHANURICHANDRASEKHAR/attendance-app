import axios from "axios";
import { toastfail } from "../Attendance/send";
export default async function get_top_Students(userdata,setdata,setloading,link)

{
    const { branch,year,section}=userdata
   setloading(true)
  try{
    const res=await axios.get(`http://localhost:5000/${link}`,{
        params:{
            branch,year,section
        }
      })
      if(res.data.status)
      {
        setdata(res.data.data)
        
      }
  }
  catch(e)
  {
    toastfail('Error getting students')
  }
  setloading(false)
}