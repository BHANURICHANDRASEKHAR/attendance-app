import React, { useEffect, useState } from 'react'
import TakeAttendance from './TakeAttendance'
import Loader from '../Loading/Loader'
import { useDispatch, useSelector } from 'react-redux'
import getStudents from './getStudents.js'
import { StudentSliceActions } from '../../Store/StudentsData.js'
 function Main() {
    const userdata=useSelector((data)=>data.user)
    const dispatch=useDispatch()
    const [studentsdata,setStudentsdata]=useState([])
    const [loading,setLoading]=useState(false)
    const [notadded,setnotadded]=useState(false)
    useEffect(()=>{
      if(userdata.length>0) 
      {
        getStudents(userdata,setLoading,setStudentsdata,setnotadded)
        dispatch(StudentSliceActions.setStudents(studentsdata))
      }
    },[userdata])
  return (
      loading? <Loader /> : (notadded?<h4 className='text-center'>Your Class details Are not Added Yet </h4>:studentsdata.length>0?<TakeAttendance students={studentsdata} />:<Loader/>)
  )
}
export default Main;
