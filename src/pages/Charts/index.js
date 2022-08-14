import React, { useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { SankeyController, Flow } from "chartjs-chart-sankey";
import { MatrixController, MatrixElement } from "chartjs-chart-matrix";
import { Link, Outlet } from "react-router-dom";
import styles from "./Charts.module.css";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

const Charts = () => {
  Chart.register(CategoryScale, SankeyController, Flow, MatrixController, MatrixElement);
  const location = useLocation();
  let [chartName, setChartName] = useState("");

  useEffect(() => {
    const pathnameSplited = location.pathname.split("/");
    setChartName(pathnameSplited[pathnameSplited.length - 1]);
  }, [location]);

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>{chartName} Chart</h1>
      <Outlet />
      <Link to="/" className={styles.linkBackToHome}>
        <p>Back to Home</p>
      </Link>
      <div className={styles.navContainer}>
        <nav style={{ position: "absolute", bottom: 0, zIndex: 1001 }} className={styles.nav}>
          <Link to="/charts/bar" className={styles.link}>
            <p>Bar</p>
          </Link>
          <Link to="/charts/line" className={styles.link}>
            <p>Line</p>
          </Link>
          <Link to="/charts/heatmap" className={styles.link}>
            <p>Heatmap</p>
          </Link>
          <Link to="/charts/sankey" className={styles.link}>
            <p>Sankey</p>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Charts;
