import React from 'react';

import { useSelector } from 'react-redux';
import Loader from '../Loading/Loader';
import Logout from './Logout'
import MainMainPage from './MainMainPage';
 function Interface() {
  const userdata=useSelector((data)=>data.user)
 
  return (
    userdata.length>0 ?(
      <div className='interface'>
      {/* <LoginAndAvatar/><br/> */}
      <Logout/> 
      <MainMainPage  userdata={userdata[0]}/>
    </div>
    ):<Loader/>
  );
}
export default React.memo(Interface)
