import React,{useState} from 'react'
import Avatar from './Avatar'
import {LoginButton} from './Interface'
export default function LoginAndAvatar() {
    const [user,setuser]=useState(false)
  return (
    <div style={{float:'right'}}>
{  user ? <Avatar /> : <LoginButton  />}
    </div>

  )
}
