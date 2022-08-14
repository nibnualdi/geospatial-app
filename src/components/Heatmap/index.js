import React, { useEffect, useRef } from "react";
import { Bar, Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { color } from "chart.js/helpers";
import styles from "./Heatmap.module.css";

const Heatmap = () => {
  const chartContainer = useRef();

  const data = {
    datasets: [
      {
        label: "level priority",
        data: [
          { x: 1, y: 1, v: 11 },
          { x: 1, y: 2, v: 12 },
          { x: 1, y: 3, v: 13 },
          { x: 2, y: 1, v: 21 },
          { x: 2, y: 2, v: 22 },
          { x: 2, y: 3, v: 23 },
          { x: 3, y: 1, v: 31 },
          { x: 3, y: 2, v: 32 },
          { x: 3, y: 3, v: 33 },
        ],
        backgroundColor(context) {
          const value = context.dataset.data[context.dataIndex].v;
          const alpha = (value - 5) / 40;
          return color("green").alpha(alpha).rgbString();
        },
        borderColor(context) {
          const value = context.dataset.data[context.dataIndex].v;
          const alpha = (value - 5) / 40;
          return color("darkgreen").alpha(alpha).rgbString();
        },
        borderWidth: 1,
        width: ({ chart }) => (chart.chartArea || {}).width / 3 - 1,
        height: ({ chart }) => (chart.chartArea || {}).height / 3 - 1,
      },
    ],
  };

  useEffect(() => {
    const chartExist = Chart.getChart("myChart"); // <canvas> id
    if (chartExist != undefined) chartExist.destroy();

    const myChartRef = chartContainer.current.getContext("2d");

    new Chart(myChartRef, {
      type: "matrix",
      data: data,
      options: {
        plugins: {
          legend: false,
          tooltip: {
            callbacks: {
              title() {
                return "";
              },
              label(context) {
                const v = context.dataset.data[context.dataIndex];
                return ["x: " + v.x, "y: " + v.y, "v: " + v.v];
              },
            },
          },
        },
        scales: {
          x: {
            ticks: {
              stepSize: 1,
            },
            grid: {
              display: false,
            },
          },
          y: {
            offset: true,
            ticks: {
              stepSize: 1,
            },
            grid: {
              display: false,
            },
          },
        },
      },
    });
  }, []);

  return (
    <div className={styles.heatmap}>
      <canvas id="myChart" ref={chartContainer} />
    </div>
  );
};

export default Heatmap;
