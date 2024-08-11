import React, { useState, useEffect } from 'react';
import Table from './Table';
import { useSelector } from 'react-redux';
import getStudents from '../Attendance/getStudents.js';
import Antd from '../Main/Antd.jsx';

export default function Main() {
  const [userdata, setuserdata] = useState([]);
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [notuser, setnotuser] = useState(false);

  useEffect(() => {
    if (user.length > 0) {
      getStudents(user, setLoading, setuserdata, setnotuser);
    }
  }, [user]);

  return (
    <div className='m-lg-4'>
      {loading ? (
        <Antd />
      ) : notuser ? (
        <h4 className='text-center'>Your Class details Are not Added Yet</h4>
      ) : (
        <Table userdata={userdata} />
      )}
    </div>
  );
}
