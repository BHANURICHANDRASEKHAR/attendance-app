import React,{useState} from 'react'
import Input from './Input'
import signup from './Submit.js'
function Signup({changeAuthMode}) {
    const branches = ['CSE','CSM','CSD','EEE','ECE','MECH','CIVIL']
    const [loading,setloading]=useState(false)
    const years=[1,2,3,4]
   const section=['A','B','C']
   const initistate={
    username:'',
    email:'',
    password:'',
    confirmPassword:'',
    branch:'',
    year:'',
    section:'',
    strength:''
   }
   const [data,setdata]=useState(initistate)
   function onHandler(e)
   {
   
    setdata({...data,[e.target.name]:e.target.value})
   }
 
   return (
     <div className="Auth-form-container">
         <div className="Auth-form-content">
           <h3 className="Auth-form-title">Sign Up</h3>
           <div className="text-center">
             Already registered?{" "}
             <span className="link-primary" onClick={changeAuthMode}>
               Sign In
             </span>
           </div>
           <Input lable='Full Name' placeholder='e.g Abc' type='text' handler={onHandler} value={data.username} name='username'/>
           <Input lable='Email Address' placeholder='e.g Abc.com' type='email' handler={onHandler} value={data.email} name='email'/>
           <Input lable='Password' placeholder='Password' type='password' handler={onHandler} value={data.password} name='password'/>
           <Input lable='Confirm Password' placeholder='Password' type='password' handler={onHandler} value={data.confirmPassword} name='confirmPassword'/>
        
           <MapStateToProps label='Select Branch:' data={branches} handler={onHandler} value={data.branch} name='branch'/>
           
           <MapStateToProps label='Select Year:' data={years} handler={onHandler} value={data.year} name='year'/>

           <MapStateToProps label='Select Section:' data={section} handler={onHandler} value={data.section} name='section'/>
           <Input lable='Class Strength' placeholder='Enter Total Class Strength' type='number' handler={onHandler} value={data.strength} name='strength'/>
           <div className="d-grid gap-2 mt-3">
             <button type="submit" className="btn btn-primary" disabled={loading} onClick={()=>signup(data,setloading,changeAuthMode)}>
             {loading ? '...Loading' : 'Submit'}
             </button>
           </div>
         </div>
       
     </div>
   )
 }

 const MapStateToProps=React.memo(({label,handler,value,data,name}) =>{
 return(
    <div className="form-group mt-3">
    <label >{label} </label>
    <select  value={value} onChange={handler} name={name}> 
      <option value="">-- Select --</option>
        {data.map(branch => (
          <option key={branch} value={branch}>{branch}</option>
        ))}
    </select>
    </div>
 )
 })
 export default React.memo(Signup)