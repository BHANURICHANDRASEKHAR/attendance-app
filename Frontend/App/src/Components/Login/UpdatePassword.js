import axios from "axios";
import { toastfunction,toastfail } from "../Attendance/send";
export default async function UpdatePassword(setloading,data,resenddata,setAuthMode)
{
 setloading(true);
 if(checkPassword(resenddata))
 {
    console.log(resenddata)
   try{
    const res=await axios.post('https://attendance-app-0kvp.onrender.com/updatePassword',{
        email:data.email,
        password:resenddata.password
        })
        if(res.data.status)
        {
            toastfunction(res.data.msg);
            setAuthMode('signin');
        }
        else{
            toastfail(res.data.msg);
        }
   }
   catch(e)
   {
    toastfail('Internal error Please try again');
     console.log(e.msg)
   }
 }
 setloading(false);
 }

 function checkPassword(data)
 {
    if(data.password==data.confirmPassword)
    {
        return true;
    }
    return false;
 }
 
 
