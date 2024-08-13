import React, { useEffect, useState } from 'react'
import TakeAttendance from './TakeAttendance'
import Loader from '../Loading/Loader'
import { useDispatch, useSelector } from 'react-redux'
import getStudents from './getStudents.js'
import { StudentSliceActions } from '../../Store/StudentsData.js'
 function Main() {
    const userdata=useSelector((data)=>data.user)
    const dispatch=useDispatch()
     const studentsdata=useSelector((state)=>state.StudentSlice.students)
    const [loading,setLoading]=useState(false)
    const [notadded,setnotadded]=useState(false)
    useEffect(()=>{
      if(userdata.length>0 && studentsdata['StudentList']==undefined) 
      {
        getStudents(userdata,setLoading,dispatch,setnotadded)
      
      }
    },[])
  return (
    loading? <Loader /> : (notadded?<h4 className='text-center'>Your Class details Are not Added Yet </h4>:studentsdata['StudentList']!=undefined?<TakeAttendance students={studentsdata['StudentList']} />:<Loader/>)
  )
}
export default Main;
{/*      loading? <Loader /> : (notadded?<h4 className='text-center'>Your Class details Are not Added Yet </h4>:studentsdata['StudentList']!=undefined?<TakeAttendance students={studentsdata['StudentList']} />:<Loader/>)
 */}
