import {toastfail,toastfunction} from '../Attendance/send.js'
import axios from 'axios'

async function signup(data,setloading,changeAuthMode)
{  setloading(true)
   const flag=dataisValid(data);
   console.log(flag);
   if(flag)
   {
    try{
      const res = await axios.post('http://localhost:5000/signup', data);
      if(res.data.status){
        toastfunction('Registration Successful');
        changeAuthMode('signin')
      }
      else{
        toastfail(res.data.msg+' you are signed in with your email address')
        changeAuthMode('signin')
      }
    }
    catch(err){
     
      toastfail('Registration Failed Internal Error');
      console.log(err)
    }
   }
  setloading(false)
}

function dataisValid(data)
{
   
   if(data.username.trim().length==0 || data.password.trim().length==0 || data.confirmPassword.trim().length==0 || data.email.trim().length==0 || data.section.length==0 || data.year.length==0 || data.branch.length==0)
   {
     toastfail('Please fill All required fields');
     return false;
   }
   else if(!mailtest(data.email))
   {
     return false;
   }
    if(data.password!=data.confirmPassword){
     toastfail('Passwords do not match');
     return false;
   }
  return true;
}
export default signup;
export function mailtest(email)
{
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

if (!(emailRegex.test(email))) {
  toastfail('Invalid email address');
  return false;
} 
return true
}