import React from "react";
import styles from "./BarChart.module.css";

import { Bar } from "react-chartjs-2";


const BarChart = () => {
  const labels = ["COKRODININGRATAN", "TEGALREJO", "SURYATMAJAN", "REJOWINANGUN", "SOROSUTAN"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "massa density",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [6811, 7067, 3580, 9670, 11907],
      },
      {
        label: "man density",
        backgroundColor: "#37cdcd",
        borderColor: "#37cdcd",
        data: [3223, 3405, 1747, 4743, 5732],
      },
      {
        label: "woman density",
        backgroundColor: "#c6dc3d",
        borderColor: "#c6dc3d",
        data: [3588, 3662, 1833, 4927, 6175],
      },
    ],
  };

  return (
    <div className={styles.bar}>
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
    </div>
  );
};

export default BarChart;
