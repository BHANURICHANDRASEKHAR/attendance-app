import axios  from "axios";
import { toastfail, toastfunction } from "../Attendance/send";
export default async function  mailfunction(setLoading,setotpflag,setOtp,data)
{
    setLoading(true);
  const res=await axios.post('http://localhost:5000/sendmail',{
        email: data.email,
    })
    if(res.data.status)
    {
     setOtp(res.data.otp)
      toastfunction(res.data.msg)
      setotpflag(true)
    }
   else{
    console.log(res)
    toastfail(res.data.msg)
   }
   setLoading(false);
}
