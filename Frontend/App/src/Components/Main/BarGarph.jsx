import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import get_top_Students from './get_top5_students'; // Assuming this function is correctly defined
import Antd from './Antd'; // Assuming this component is correctly defined
import { useDispatch, useSelector } from 'react-redux';

const App = ({ userdata }) => {
 
  const [loading, setLoading] = useState(false);
  const topStudents=useSelector((state)=>state.bargraph.BarGarph)
  const dispatch=useDispatch();
  
  useEffect(() => {
    if(topStudents.length==0)
    {
      get_top_Students(userdata, dispatch, setLoading, '1weekabsentees');

    }
  }, []);

  const data = {
    series: [
      {
        name: 'Average Absentees',
        data: topStudents.map(item => ({
          x: item.date,
          y: Math.round(item.averageAbsentees),
        })),
      },
    ],
    options: {
      chart: {
        id: 'attendance-chart',
        type: 'line',
        animations: {
			enabled: true,
			easing: 'easeinout',
			speed: 800,
		  },
      },
      xaxis: {
        type: 'category',
        title: {
          text: 'Date',
        },
        labels: {
          rotate: -45, // Rotate labels if needed
        },
      },
      yaxis: {
        title: {
          text: 'Value',
        },
        min: 5,
        max: 68,
        tickAmount: 13,
      },
      grid: {
        borderColor: 'rgba(0,0,0,0.1)',
        strokeDashArray: 1,
      },
      title: {
        text: 'Daily Attendance Comparison',
        align: 'center',
      },
    },
  };

  return (
    <div className="chart-container">
      {loading ? <Antd /> : <React.Fragment>
        
        <Chart
          options={data.options}
          series={data.series}
          type="line"
          height="400"
        />
      </React.Fragment>}
    </div>
  );
};

export default App;
