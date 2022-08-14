import "./App.css";

import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef, useState } from "react";

// react router dom
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Charts from "./pages/Charts";
import Sankey from "./components/Sankey";
import Heatmap from "./components/Heatmap";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";

function App() {
  let [showSideDetail, setShowSideDetail] = useState(false);
  let [mousePosition, setMousePosition] = useState({
    clientX: 0,
    clientY: 0,
  });
  let [census, setCensus] = useState({
    provinsi: "",
    kecamatan: "",
    kelurahan: "",
    pria: 0,
    perempuan: 0,
    jumlahmassa: 0,
  });
  let [censusDuplicated, setCensusDuplicated] = useState({
    provinsi: "",
    kecamatan: "",
    kelurahan: "",
    pria: 0,
    perempuan: 0,
    jumlahmassa: 0,
  });

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            showSideDetail={showSideDetail}
            setShowSideDetail={setShowSideDetail}
            mousePosition={mousePosition}
            setMousePosition={setMousePosition}
            census={census}
            setCensus={setCensus}
            censusDuplicated={censusDuplicated}
            setCensusDuplicated={setCensusDuplicated}
          />
        }
      />
      <Route path="/charts" element={<Charts />}>
        <Route path="bar" element={<BarChart />} />
        <Route path="line" element={<LineChart />} />
        <Route path="sankey" element={<Sankey />} />
        <Route path="heatmap" element={<Heatmap />} />
      </Route>
    </Routes>
  );
}

export default App;
