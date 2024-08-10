import React from 'react';
import { Button, Popconfirm, message } from 'antd';
import Cookie from 'js-cookie';
import { useSelector,useDispatch } from 'react-redux';
import { LoginActions } from '../../Store/Loginslice';
const App = () => {
    const dispatch = useDispatch();
  const handleConfirm = () => {
    Cookie.remove('x-token');
    dispatch(LoginActions.setlogin());
   
  };

  

  return (
    <div className='button'>
      <Popconfirm
        title="Are you sure to Logout?"
        onConfirm={handleConfirm}
        okText="Yes"
        cancelText="No"
        className="custom-popconfirm"
      >
        <Button>Logout</Button>
      </Popconfirm>
    </div>
  );
};

export default App;
