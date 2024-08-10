import React from 'react';
import { useDispatch } from 'react-redux';
import { LoginActions } from '../../Store/Loginslice';
import Model from '../Login/Model'
import LoginAndAvatar from './LoginAndAvatar';
import Mainpage from './Mainpage';
import { useSelector } from 'react-redux';
import Loader from '../Loading/Loader';
export default function Interface() {
  const userdata=useSelector((data)=>data.user)
  return (
    userdata.length>0 ?(
      <div className='interface'>
      {/* <LoginAndAvatar/><br/> */} 
      <Mainpage  userdata={userdata[0]}/>
    </div>
    ):<Loader/>
  );
}

// export const LoginButton = () => {
//   const dispatch = useDispatch();
//   console.log(LoginActions);

//   return (
//     <button
//       className='button'
//       onClick={() => dispatch(LoginActions.setlogin())}
//     >Login
//     </button>
//   );
// };
