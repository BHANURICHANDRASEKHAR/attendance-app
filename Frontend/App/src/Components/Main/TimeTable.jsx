import React, { useState, useEffect } from 'react';
import getTimeTable from './timetable.js';
import Antd from './Antd.jsx';

const Timetable = React.memo(({ userdata }) => {
    const days = ["Sun", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const [timetabledata, settimedata] = useState([]);
    const [loading, setLoader] = useState(false);
    const currentDay = new Date().getDay(); 

    useEffect(() => {
        if (currentDay>0) {
           
            getTimeTable(userdata, setLoader, settimedata)
                
        }
    }, []); 

    if (loading) {
        return <Antd />;
    }
   console.log(currentDay)
   return (
    currentDay > 0 ? (
        <div className='time-table'>
            {timetabledata.timetable && timetabledata.timetable[days[currentDay]] && timetabledata.timetable[days[currentDay]].length > 0 ? (
                timetabledata.timetable[days[currentDay]].map((item, index) => (
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
