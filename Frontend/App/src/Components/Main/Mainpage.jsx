import React from 'react'
import './Mainpage.css'
import { IoSunnyOutline } from "react-icons/io5";
import { SiGoogleclassroom } from "react-icons/si";
import { PiStudentBold } from "react-icons/pi";
import {NavLink} from 'react-router-dom'
import { Button } from 'antd';
import ChartsIntegration from './ChartsIntegration'
import TimeTable from './TimeTable.jsx';
import { useSelector } from 'react-redux';
 function Mainpage({userdata}) {
    
    const {username,branch,email,year,section,strength}=userdata
    const rawdata=[{
        title:'Today',
        time:getTimer(),
        value:new  Date().toJSON().slice(0, 10),
        icon:IoSunnyOutline
    },
    {
        title:'Branch',
        value:branch,
        year:year,

        icon:SiGoogleclassroom
    },
    {
        title:'Total Strength',
        section:section,
        value:strength,
        name:username,
        icon:PiStudentBold

    },]
   
  return (
    <React.Fragment>
    <div className='grid-parent mt-3'>
     {
    rawdata.map(item=>(
        <div key={item.title} className='grid-child'>
        <p className='display-6' ><item.icon className='icon'/>{item.time!=undefined && <span className='mt-3 text-center' style={{color: 'rgb(133, 133, 228)'}}>&ensp;{item.time}</span>}</p>   
        {
            item.section &&
           <React.Fragment> <p className='grid-child-icon'><span  className='title'>Section</span>:{item.section}</p>
           <p className='grid-child-icon'><span  className='title'>Name</span>:{item.name}</p>
  </React.Fragment>
        }
        <p className='grid-child-icon'><span  className='title'>{item.title}</span>:{item.value}</p>
        
        {
            item.year &&
            <p className='grid-child-icon'><span  className='title'>Year</span>:{item.year}</p>
        }
        {
           
            item.title=='Today' &&<React.Fragment>
            <br/>  
            <Routers route='/take-attendance' name='Take Attendance'/><br/><br/>
            <Routers route='/dashboard' name='Dashboard'/>
            </React.Fragment>
        }
        </div>
     ))   }
     
    </div>
    <TimeTable userdata={userdata}/><br/>
    <ChartsIntegration/>
    </React.Fragment>
  )
}
export default Mainpage=React.memo(Mainpage)



export function getTimer()
{
    const options = { hour: '2-digit', minute: '2-digit', hour12: false };
    const time=new Date().toLocaleTimeString('en-US', options)
    return time
}
const Routers=React.memo(({route,name})=>{
    return(
        <NavLink to={route} className='att'>{name}</NavLink>
    )
})
