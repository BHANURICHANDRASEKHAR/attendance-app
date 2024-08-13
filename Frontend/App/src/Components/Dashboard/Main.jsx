import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from './Table';
import getStudents from '../Attendance/getStudents.js';
import Antd from '../Main/Antd.jsx';

export default function Main() {
  const userdata = useSelector((data) => data.user);
  const dispatch = useDispatch();
  const studentsdata = useSelector((state) => state.StudentSlice.students);
  const [loading, setLoading] = useState(false);
  const [notadded, setnotadded] = useState(false);

  useEffect(() => {
    if (userdata.length > 0 && studentsdata['StudentList'] === undefined) {
      getStudents(userdata, setLoading, dispatch, setnotadded);
    }
  }, [userdata, studentsdata, dispatch]);

  return (
    <div className='m-lg-4'>
      {loading ? (
        <Antd />
      ) : notadded ? (
        <h4 className='text-center'>Your Class details Are not Added Yet</h4>
      ) : (
        studentsdata['StudentList'] !== undefined && (
          <Table userdata={studentsdata['StudentList']} />
        )
      )}
    </div>
  );
}
