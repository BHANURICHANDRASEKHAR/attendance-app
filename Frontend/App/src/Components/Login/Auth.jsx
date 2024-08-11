import React, { useState } from "react"
import './Auth.css'
import Login from "./Login"
import Signup from "./Signup"
import ForgotPassword from "./ForgotPassword"
export default function () {
  let [authMode, setAuthMode] = useState("signin")
  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }
  if (authMode === "signin") {
    return (
     <Login authMode={authMode} changeAuthMode={changeAuthMode} setAuthMode={setAuthMode}/>
    )
  }
  else if(authMode === "signup") {
  return (
   <Signup setAuthMode={setAuthMode} changeAuthMode={changeAuthMode}/>
  )}
  else{
    return (<ForgotPassword setAuthMode={setAuthMode}  authMode={authMode}/>)
  }
}