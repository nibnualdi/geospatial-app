import "./App.css";

import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef } from "react";

mapboxgl.accessToken = process.env.REACT_APP_TOKEN_MAPBOX;

function App() {
  const mapContainer = useRef();

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current, // container ID
      style: "mapbox://styles/mapbox/streets-v11", // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
      projection: "globe", // display the map as a 3D globe
    });

    map.on("style.load", () => {
      map.setFog({}); // Set the default atmosphere style
    });

    map.on("load", () => {
      // Add the vector tileset as a source.
      map.addSource("ethnicity", {
        type: "vector",
        url: "mapbox://examples.8fgz4egr",
      });
      map.addLayer({
        id: "population",
        type: "circle",
        source: "ethnicity",
        "source-layer": "sf2010",
        paint: {
          // Make circles larger as the user zooms from z12 to z22.
          "circle-radius": {
            base: 1.75,
            stops: [
              [12, 2],
              [22, 180],
            ],
          },
          // Color circles by ethnicity, using a `match` expression.
          "circle-color": [
            "match",
            ["get", "ethnicity"],
            "White",
            "#fbb03b",
            "Black",
            "#223b53",
            "Hispanic",
            "#e55e5e",
            "Asian",
            "#3bb2d0",
            /* other */ "#ccc",
          ],
        },
      });
    });

    return () => map.remove();
  }, []);

  // useEffect(() => {
  //   console.log(process.env.REACT_APP_TOKEN_MAPBOX);
  // }, []);

  return <div ref={mapContainer} style={{ width: "100%", height: "100vh" }}></div>;
}

export default App;
