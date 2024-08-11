import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Input from './Input'
import { toastfail } from '../Attendance/send';
import UpdatePassword from './UpdatePassword.js'
import Timer from './Timer';
export default function Otp({otp,data,setOtp,onHandler,setAuthMode}) {
    const [status,setstatus]=useState(false)
    const [loading,setloading]=useState(false)
    const [forgetdata,setforgetdata]=useState({
        password:'',
        confirmPassword:''
    })
    function verify(){
        if(otp==data.otp)
        {
            setstatus(true) 
        }
        else{
            toastfail('Otp is Not Matched ')
        }
    }
    function onHandler1(e)
    {
        setforgetdata({...forgetdata,[e.target.name]:e.target.value})
    }
    if(!status)
    {
        return (
            <div className='container'>
            <div className='row'>
            <div className='col mt-4 text-dark'>
                <h3>Enter Otp</h3>
                <p>Verification code has been sent to your email, {data.email}, please enter the same here to complete the signup. Valid for 10 minutes.</p>
                <Input value={data.otp}  lable='Confirm Otp' type='text' name='otp' handler={onHandler}/> 
                <Button variant="danger" className='w-100 text-white mt-3'  onClick={verify}>Procced</Button>
            </div>
            <div className='row mt-4'>
           <Timer setOtp={setOtp} data={data} />
           </div>
        </div></div>
          )
    }
    else{
      return( <React.Fragment>
        <Input lable='Password' placeholder='Password' type='password' handler={onHandler1} value={forgetdata.password} name='password'/>
         <Input lable='Confirm Password' placeholder='Password' type='password' handler={onHandler1} value={forgetdata.confirmPassword} name='confirmPassword'/>
         <Button variant="primary" className='w-100 text-white mt-3' disabled={loading}  onClick={()=>{UpdatePassword(setloading,data,forgetdata,setAuthMode)}}>{loading ? '...loading' : 'Update'}</Button>
 
        </React.Fragment>)
    }
}
