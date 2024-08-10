import React, { useState } from "react"
import './Auth.css'
import Login from "./Login"
import Signup from "./Signup"
export default function () {
  let [authMode, setAuthMode] = useState("signin")
  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }
  if (authMode === "signin") {
    return (
     <Login authMode={authMode} changeAuthMode={changeAuthMode}/>
    )
  }
  return (
   <Signup setAuthMode={setAuthMode} changeAuthMode={changeAuthMode}/>
  )
}