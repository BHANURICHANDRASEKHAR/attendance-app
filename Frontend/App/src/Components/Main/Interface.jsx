import React from 'react';
import { useDispatch } from 'react-redux';
import { LoginActions } from '../../Store/Loginslice';
import Model from '../Login/Model'
import LoginAndAvatar from './LoginAndAvatar';
import Mainpage from './Mainpage';
export default function Interface() {
  return (
    <div className='interface'>
      <LoginAndAvatar/><br/>
      <Model/>
      <Mainpage />
    </div>
  );
}

export const LoginButton = () => {
  const dispatch = useDispatch();
  console.log(LoginActions);

  return (
    <button
      className='button'
      onClick={() => dispatch(LoginActions.setlogin())}
    >Login
    </button>
  );
};
