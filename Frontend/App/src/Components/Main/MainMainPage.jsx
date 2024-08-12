import React from 'react'
import Mainpage from './Mainpage'
import Footer from '../Footer'
export default function MainMainPage({userdata}) {
  return (
    <React.Fragment>
    <Mainpage userdata={userdata}/>
    <Footer/>
    </React.Fragment>
  )
}
