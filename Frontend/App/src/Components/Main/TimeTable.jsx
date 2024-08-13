import React, { useState, useEffect } from 'react';
import getTimeTable from './timetable.js';
import Antd from './Antd.jsx';
import { useDispatch, useSelector } from 'react-redux';
const Timetable = React.memo(({ userdata }) => {
    const days = ["Sun", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
   
    const [loading, setLoader] = useState(false);
    const currentDay = new Date().getDay(); 
    const timetabledata=useSelector((state)=>state.timetable.timetable)
    const dispatch=useDispatch();
    useEffect(() => {
        if (currentDay > 0 && timetabledata.length==0 ) {
            getTimeTable(userdata, setLoader,dispatch)    
        }
    }, []); 

    if (loading || timetabledata.length==0 ) {
        return <Antd />;    
    }
   
   return (
    currentDay > 0 ?  (
        <div className='time-table'>
            {timetabledata[0].timetable && timetabledata[0].timetable[days[currentDay]] && timetabledata[0].timetable[days[currentDay]].length > 0 ? (
                timetabledata[0].timetable[days[currentDay]].map((item, index) => (
                    <div key={index} className='time-table-child'>
                        <p className='grid-child-icon'>{item.subject}: {item.time}</p>
                        <p className='grid-child-icon'>Faculty: {item.faculty}</p>
                    </div>
                ))
            ) : (
                <div className='holiday w-100'><h3>No classes commence today</h3></div>
            )}
        </div>
    ) : (
        <div className='holiday w-100'><h3>No classes commence today</h3></div>
    )
);
});

export default Timetable;
