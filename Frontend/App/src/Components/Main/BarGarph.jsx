
import React,{useState,useEffect} from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import './Graph.css'
import Antd from './Antd';
import get_top_Students from './get_top5_students';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const App = ({userdata}) => {
	const [topStudents, setTopStudents] = useState([]);
  const [loading,setloading] = useState(false)
  useEffect(() => {
    get_top_Students(userdata, setTopStudents, setloading,'1weekabsentees')
  }, [])
	
	const options = {
		animationEnabled: true,
		// title: {
		// 	text: "Yearly Values"
		// },
		axisX: {
			title: "Date",
			valueFormatString: "YYYY"
		},
		axisY: {
			title: "Value",
			minimum: 5,
			maximum: 68,
			interval: 5,
			gridThickness: 1,  // Set the thickness of the grid lines
			gridColor: "rgba(0,0,0,0.1)"  // Set the grid color with reduced opacity (0.1)
		},
		data: [{
			type: "spline",
			dataPoints: topStudents.map(item => ({
				label: item.date,
				y: Math.round(item.averageAbsentees)
			}))
		}]
	};

	return (
		<div className="chart-container">
          {
			loading?<Antd/>:<React.Fragment>
			<h6>Daily Attendance Comparision</h6>
			<CanvasJSChart options={options} />
			{/*<CanvasJSChart options={options} />*/}</React.Fragment>
		  }
		</div>
	);
};

export default React.memo(App);
