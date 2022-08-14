import React from "react";

// react router dom
import { Link } from "react-router-dom";

// components
import Maps from "../../components/Maps";
import Popup from "../../components/Popup";
import SideDetail from "../../components/SideDetail";

const Home = ({
  showSideDetail,
  setShowSideDetail,
  mousePosition,
  setMousePosition,
  census,
  setCensus,
  censusDuplicated,
  setCensusDuplicated,
}) => {
  const handleMouseMove = (e) => {
    const clientX = e.clientX;
    const clientY = e.clientY;
    setMousePosition({ clientX, clientY });
  };

  return (
    <div
      onMouseMove={(e) => {
        handleMouseMove(e);
      }}
      style={{ position: "relative" }}
    >
      <SideDetail
        provinsi={censusDuplicated.provinsi}
        kelurahan={censusDuplicated.kelurahan}
        pria={censusDuplicated.pria}
        perempuan={censusDuplicated.perempuan}
        jumlahmassa={censusDuplicated.jumlahmassa}
        showSideDetail={showSideDetail}
        setShowSideDetail={setShowSideDetail}
      />
      <div className="noteHoverYellow" style={{ position: "absolute" }}>
        <p>*hover the yellow part to see the census data</p>
      </div>
      <Popup
        provinsi={census.provinsi}
        kelurahan={census.kelurahan}
        pria={census.pria}
        perempuan={census.perempuan}
        jumlahmassa={census.jumlahmassa}
        mousePosition={mousePosition}
      />
      <Maps
        setCensus={setCensus}
        setCensusDuplicated={setCensusDuplicated}
        setShowSideDetail={setShowSideDetail}
      />
      <nav style={{ position: "absolute", bottom: 0, zIndex: 1001 }}>
        <Link to="/">Home</Link>
        <Link to="/charts">Charts</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
      </nav>
    </div>
  );
};

export default Home;
