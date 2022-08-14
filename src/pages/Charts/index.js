import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 

const Charts = () => {
  const labels = [
    'COKRODININGRATAN',
    'TEGALREJO',
    'SURYATMAJAN',
    'REJOWINANGUN',
    'SOROSUTAN',
  ];
  
  const data = {
    labels: labels,
    datasets: [{
      label: 'massa density',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [6811, 7067, 3580, 9670, 11907],
    }]
  };
  
  Chart.register(CategoryScale);
  return (
    <>
      <Bar
        options={{
          plugins: {
            title: {
              display: true,
              text: "Census Data",
            },
            legend: {
              display: true,
              position: "bottom",
            },
          },
        }}
        data={data}
      />
    </>
  );
};

export default Charts;
