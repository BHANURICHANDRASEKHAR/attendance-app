import toast from "react-hot-toast";
import axios from "axios";
import {AttendanceActions} from '../../Store/attendance'
export default async function storedatabase(data,userdata,setLoader,List,dispatch)
{
    dispatch(AttendanceActions.setAbsent(List))
    data.section=userdata[0].section;
    data.branch=userdata[0].branch;
    data.year=userdata[0].year;
    data.absentList=List;

  try{
    const res=await axios.post('https://attendance-app-0kvp.onrender.com/post-absecentList', {
      data
    });
    if(res.data.status)
    {
        toastfunction("Attendance stored successfully");

    }
  }
  catch(error)
  {
    console.log(error);
  }
  setLoader(false)
}
export function toastfunction(msg)
{
   toast.success(msg)
}
export function toastfail(msg)
{
    toast.error(msg)
}