import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import get_top_Students from './get_top5_students.js';
import Antd from './Antd.jsx';

const App = ({ userdata }) => {
  const [topStudents, setTopStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    get_top_Students(userdata, setTopStudents, setLoading, 'top5Students');
  }, [userdata]);

  const data = {
    series: [
      {
        name: 'Total Attendance',
        data: topStudents.map(student => student.totalAttendance),
      },
    ],
    options: {
      chart: {
        id: 'bar-chart',
        type: 'bar',
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 800,
        },
      },
      xaxis: {
        categories: topStudents.map(student => student.name),
        title: {
          text: 'Students',
        },
      },
      yaxis: {
        title: {
          text: 'Total Attendance',
        },
        min: 0,
      },
      title: {
        text: 'Regular Students',
        align: 'center',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: true,
      },
      stroke: {
        show: true,
        colors: ['transparent'],
        width: 2,
        curve: 'smooth',
      },
    },
  };

  return (
    <div className='bargraph'>
      {loading ? <Antd /> : <Chart options={data.options} series={data.series} type="bar"    height="400"/>}
    </div>
  );
};

export default React.memo(App);
