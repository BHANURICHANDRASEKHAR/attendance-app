import React,{useEffect,useState} from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import get_top_Students from './get_top5_students.js';

import Antd from './Antd.jsx';

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const App = ({userdata}) => {
  const [topStudents, setTopStudents] = useState([]);
 
  const [loading,setloading] = useState(false)
  useEffect(() => {
    get_top_Students(userdata, setTopStudents, setloading,'top5Students')
  }, [])
  const dataPoints = topStudents.map(student => ({
    label: student.name,
    y: student.totalAttendance
  }));
  const options = {
    animationEnabled: true,
    title: {
      text: "Regular Students"
    },
    data: [
      {
        type: "column", 
        dataPoints: dataPoints
      }
    ]
  };

  return (
    <div className='bargraph'>
    {
      loading?<Antd/>: <CanvasJSChart options={options} />
    }
      {/* You can get reference to the chart instance if needed */}
    </div>
  );
};

export default React.memo(App);
