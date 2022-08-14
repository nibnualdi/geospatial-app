import React, { useEffect, useRef } from "react";
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
      a: "orange",
      b: "#2c2c2c",
      c: "#cdcdcd",
      d: "gray",
      f: "#ff0000",
      g: "#2c2c2c",
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
              { from: "a", to: "g", flow: 5 },
              { from: "g", to: "c", flow: 5 },
              { from: "b", to: "c", flow: 10 },
              { from: "d", to: "c", flow: 7 },
              { from: "d", to: "g", flow: 7 },
              { from: "g", to: "f", flow: 7 },
            ],
            colorFrom: (c) => getColor(c.dataset.data[c.dataIndex].from),
            colorTo: (c) => getColor(c.dataset.data[c.dataIndex].to),
            colorMode: "gradient", // or 'from' or 'to'
            /* optional labels */
            labels: {
              a: "Married",
              b: "Money",
              c: "Happy",
              d: "Not Married",
              f: "BROKE",
              g: "Have No Money"
            },
            /* optional priority */
            priority: {
              b: 1,
              d: 0,
            },
            /* optional column overrides */
            column: {
              d: 0,
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
