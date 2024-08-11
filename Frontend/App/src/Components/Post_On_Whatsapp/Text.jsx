import React from 'react';
import './text.css'; 
import { useSelector } from 'react-redux';

const AttendanceReport = React.forwardRef((props, ref) => {
    const absentList = useSelector((state) => state.AttendanceSlice.absentList);
    const user = useSelector((state) => state.user[0]);
    const dept = `${user.branch}-${user.section}`;

    const data = {
        date: new Date().toJSON().slice(0, 10),
        time: getTime(),
        department: dept,
        totalStrength: user.strength,
        studentsPresent: user.strength - absentList.length,
        studentsAbsent: absentList.length,
        absenteeList: absentList.join(', '),
    };

    return (
        <React.Fragment>
            <div ref={ref} className="attendance-report">
                <div className="report-section">
                    <p><strong>Date:</strong> {data.date}</p>
                    <p><strong>Time:</strong> {data.time}</p>
                </div>
                <div className="report-section">
                    <p><strong>Department:</strong> {data.department}</p>
                </div>
                <div className="report-section">
                    <p><strong>Total Strength:</strong> {data.totalStrength}</p>
                    <p><strong>No. of Students Present:</strong> {data.studentsPresent}</p>
                    <p><strong>No. of Students Absent:</strong> {data.studentsAbsent}</p>
                </div>
                <div className="report-section">
                    <h2>Pin List of Absentees:</h2>
                    <p className='m-1'>{data.absenteeList}</p>
                </div>
            </div>
        </React.Fragment>
    );
});

export default React.memo(AttendanceReport);

function getTime() {
    const currentTime = new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
    return currentTime.slice(0, 2) <= 12 ? '9:30-12:30' : '1:15-4:15';
}
