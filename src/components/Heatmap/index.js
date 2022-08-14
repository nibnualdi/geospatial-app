import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
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
          { x: 2, y: 2, v: 12 },
          { x: 2, y: 3, v: 13 },
          { x: 3, y: 1, v: 31 },
          { x: 3, y: 2, v: 12 },
          { x: 3, y: 3, v: 33 },
          { x: 4, y: 1, v: 11 },
          { x: 4, y: 2, v: 32 },
          { x: 4, y: 3, v: 33 },
          { x: 5, y: 1, v: 1 },
          { x: 5, y: 2, v: 12 },
          { x: 5, y: 3, v: 33 },
          { x: 6, y: 1, v: 41 },
          { x: 6, y: 2, v: 62 },
          { x: 6, y: 3, v: 33 },
          { x: 7, y: 1, v: 21 },
          { x: 7, y: 2, v: 12 },
          { x: 7, y: 3, v: 73 },
          { x: 8, y: 1, v: 81 },
          { x: 8, y: 2, v: 32 },
          { x: 8, y: 3, v: 13 },
          { x: 9, y: 1, v: 34 },
          { x: 9, y: 2, v: 32 },
          { x: 9, y: 3, v: 3 },
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
        width: ({ chart }) => (chart.chartArea || {}).width / 9 - 1,
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
