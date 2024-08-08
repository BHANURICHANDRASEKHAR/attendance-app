
import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import './Graph.css'
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const App = () => {
	const data = [
		{ year: '1991', value: 3 },
		{ year: '1992', value: 4 },
		{ year: '1993', value: 3.5 },
		{ year: '1994', value: 5 },
		{ year: '1995', value: 49 },
		{ year: '1996', value: 6 },
		{ year: '1997', value: 7 },
		{ year: '1998', value: 9 },
		{ year: '1999', value: 6 },
	];

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
			dataPoints: data.map(item => ({
				label: item.year,
				y: item.value
			}))
		}]
	};

	return (
		<div className="chart-container">
    <h6>Daily Attendance Comparision</h6>

			<CanvasJSChart options={options} />
		</div>
	);
};

export default React.memo(App);
