import React from 'react'
import { Routes,Route } from 'react-router-dom'
import TakeAttendance from '../Attendance/TakeAttendance'
import Interface from '../Main/Interface'
export default function Router() {
  return (
    <React.Fragment>
    <Routes>
      <Route path='/' element={<Interface />} />
      <Route path='/take-attendance' element={<TakeAttendance />} />
    </Routes>
    </React.Fragment>
  )
}
