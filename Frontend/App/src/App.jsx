import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Router from './Components/Routes/Router';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { LoginActions } from './Store/Loginslice.js';
import Model from './Components/Login/Model';
import getCookie, { validateToken } from '../getToken.js';
import { UserdetailsActions } from './Store/userDetails.js';
function App() {
  const [token, setToken] = useState('');
  const state = useSelector((state) => state.Loginslice.loginstatus);
  const dispatch = useDispatch(); 
  useEffect(() => {
    const token = getCookie(); 
    setToken(token); 

    if (!token) {
      dispatch(LoginActions.setlogin()); 
    }
  }, [state, dispatch]); 
  useEffect(() => {
   async function get()
   {
    if (token) {
      const data= await validateToken(token); 
      dispatch(UserdetailsActions.setDetails(data.data))
    }
   }
   get();
  }, [token]); 
 
  if (token) {
    return <Router />;
  } else {
    return <Model />;
  }
}

export default App;
