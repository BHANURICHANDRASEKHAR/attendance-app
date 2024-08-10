import React, { useEffect, useState } from 'react'
import TakeAttendance from './TakeAttendance'
import Loader from '../Loading/Loader'
import { useDispatch, useSelector } from 'react-redux'
import getStudents from './getStudents.js'
import { StudentSliceActions } from '../../Store/StudentsData.js'
export default function Main() {
    const userdata=useSelector((data)=>data.user)
    const dispatch=useDispatch()
    const [studentsdata,setStudentsdata]=useState([])
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
      if(userdata.length>0) 
      {
        getStudents(userdata,setLoading,setStudentsdata)
        dispatch(StudentSliceActions.setStudents(studentsdata))
      }
    },[userdata])
  return (
      loading? <Loader /> : (studentsdata.length>0?<TakeAttendance students={studentsdata} />:<Loader/>)
  )
}
