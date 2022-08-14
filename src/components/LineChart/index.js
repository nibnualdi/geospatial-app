import React from "react";
import { Line } from "react-chartjs-2";
import styles from "./LineChart.module.css";

const LineChart = () => {
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
    ],
  };

  return (
    <div className={styles.line}>
      <Line
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

export default LineChart;
