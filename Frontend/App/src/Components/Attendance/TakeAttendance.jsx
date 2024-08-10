import React, { useState, useRef, useEffect } from 'react';
import './att.css';
import StudentList from './StudentList';
import { getTimer } from '../Main/Mainpage';
import { useSelector } from 'react-redux';
function TakeAttendance({students}) {
    
    const [data, setData] = useState({
        absentList: [],
        shift: '',
        time: new Date().toLocaleTimeString(),
        date:new  Date().toJSON().slice(0, 10),
    });
  
    return (
        <div className='main-header'> 
            <Content setData={setData} />
            <StudentList setData={setData} data1={data} students={students} />
        </div>
    );
}

export default TakeAttendance;

const Content = React.memo(({ setData }) => {
    const [shift, setshift] = useState('');
    const morningRef = useRef(null);
    const afternoonRef = useRef(null);

    useEffect(() => {
       
        if (shift) {
            setData(prevData => ({
                ...prevData,
                shift
            }));
            
        }
        
    }, [shift, setData]);

    const handleRadioChange = () => {
        if (morningRef.current.checked) {
            setshift('morning');
        } else if (afternoonRef.current.checked) {
            setshift('afternoon');
        }
    };

    return (
        <div className='content'>
            <h4>Mark for Absentees</h4>
            <div className='d-flex'>
                <p className='me-5'>{new Date().toJSON().slice(0, 10)}</p>
                <p>{getTimer()}</p>
            </div>
            <div className='d-flex'>
                <input
                    type="radio"
                    id="morning"
                    name="day"
                    value="morning"
                    ref={morningRef}
                    onChange={handleRadioChange}
                />
                <label htmlFor="morning" className='m-0'>Morning</label><br/>
                <input
                    type="radio"
                    id="afternoon"
                    name="day"
                    value="afternoon"
                    ref={afternoonRef}
                    onChange={handleRadioChange}
                />
                <label htmlFor="afternoon">Afternoon</label><br/>
            </div>
        </div>
    );
});
