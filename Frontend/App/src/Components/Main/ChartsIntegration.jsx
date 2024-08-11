import React from 'react'
import BarGarph from './BarGarph'
import LeaderBoard from './LeaderBoard'
import './Graph.css'
import { useSelector } from 'react-redux'
export default function ChartsIntegration() {
    const userdata=useSelector((data)=>data.user)
   
  return (
    <div className='chart-parent'>
   {/*  <BarGarph userdata={userdata[0]}/> */}
   <BarGarph userdata={userdata[0]}/>
    <LeaderBoard userdata={userdata[0]} />
    </div>
  )
}
