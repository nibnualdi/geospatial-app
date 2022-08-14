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
      <Route path="/charts" element={<Charts />} />
    </Routes>
  );
}

export default App;
