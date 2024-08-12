import React from 'react'
import BarGarph from './BarGarph'
import LeaderBoard from './LeaderBoard'
{/*import BarGarph from './BarGarph'

import ErrorBoundary from '../ErrorBoundry'*/}
import './Graph.css'
import { useSelector } from 'react-redux'

export default function ChartsIntegration() {
    const userdata=useSelector((data)=>data.user)
   
  return (
    <div className='chart-parent'>
    <BarGarph userdata={userdata[0]}/>
   {/*  <BarGarph userdata={userdata[0]}/> 
  <ErrorBoundary> <BarGarph userdata={userdata[0]}/></ErrorBoundary>
    <LeaderBoard userdata={userdata[0]} />*/}
    <LeaderBoard userdata={userdata[0]} />
    </div>
  )
}
