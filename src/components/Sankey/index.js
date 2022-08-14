import React, { useEffect, useRef } from "react";
import { SankeyController, Flow } from "chartjs-chart-sankey";
import Chart from "chart.js/auto";
import styles from "./Sankey.module.css";

const Sankey = () => {
  const chartSankeyContainer = useRef();

  // Chart.register(SankeyController, Flow);
  useEffect(() => {
    const chartExist = Chart.getChart("myChartSankey"); // <canvas> id
    if (chartExist != undefined) chartExist.destroy();

    const myChartRef = chartSankeyContainer.current.getContext("2d");

    const colors = {
      a: "red",
      b: "green",
      c: "blue",
      d: "gray",
    };

    const getColor = (key) => colors[key];

    const chart = new Chart(myChartRef, {
      type: "sankey",
      data: {
        datasets: [
          {
            label: "My sankey",
            data: [
              { from: "a", to: "b", flow: 10 },
              { from: "a", to: "c", flow: 5 },
              { from: "b", to: "c", flow: 10 },
              { from: "d", to: "c", flow: 7 },
            ],
            colorFrom: (c) => getColor(c.dataset.data[c.dataIndex].from),
            colorTo: (c) => getColor(c.dataset.data[c.dataIndex].to),
            colorMode: "gradient", // or 'from' or 'to'
            /* optional labels */
            labels: {
              a: "Label A",
              b: "Label B",
              c: "Label C",
              d: "Label D",
            },
            /* optional priority */
            priority: {
              b: 1,
              d: 0,
            },
            /* optional column overrides */
            column: {
              d: 1,
            },
            size: "max", // or 'min' if flow overlap is preferred
          },
        ],
      },
    });
  }, []);
  return (
    <div className={styles.sankey}>
      <canvas id="myChartSankey" ref={chartSankeyContainer} />;
    </div>
  );
};

export default Sankey;
