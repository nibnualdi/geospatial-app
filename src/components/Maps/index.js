import React, { useEffect, useRef } from "react";

// mapbox && geojson
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { 
  DANUREJAN_GEOJSON,
  JETIS_GEOJSON,
  KOTAGEDE_GEOJSON,
  TEGALREJO_GEOJSON,
  UMBULHARJO_GEOJSON,
 } from "../../utils/geojson";
mapboxgl.accessToken = process.env.REACT_APP_TOKEN_MAPBOX;

const Maps = ({ setCensus, setCensusDuplicated, setShowSideDetail }) => {
  const mapContainer = useRef();

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/nibnualdi/cl6ryxspi002g14roskbwlvr0",
      center: [110.36418914794922, -7.801820140855005],
      zoom: 12,
      projection: "globe",
    });

    map.on("style.load", () => {
      map.setFog({});
    });

    map.on("load", () => {
      map.addSource("jetis", {
        type: "geojson",
        data: JETIS_GEOJSON,
      });

      map.addSource("tegalrejo", {
        type: "geojson",
        data: TEGALREJO_GEOJSON,
      });

      map.addSource("danurejan", {
        type: "geojson",
        data: DANUREJAN_GEOJSON,
      });

      map.addSource("kotagede", {
        type: "geojson",
        data: KOTAGEDE_GEOJSON,
      });

      map.addSource("umbulharjo", {
        type: "geojson",
        data: UMBULHARJO_GEOJSON,
      });

      map.addLayer({
        id: "jetis",
        type: "fill",
        source: "jetis",
        paint: {
          "fill-color": "#f0e8c1",
        },
      });

      map.addLayer({
        id: "tegalrejo",
        type: "fill",
        source: "tegalrejo",
        paint: {
          "fill-color": "#f0e8c1",
        },
      });

      map.addLayer({
        id: "danurejan",
        type: "fill",
        source: "danurejan",
        paint: {
          "fill-color": "#f0e8c1",
        },
      });

      map.addLayer({
        id: "kotagede",
        type: "fill",
        source: "kotagede",
        paint: {
          "fill-color": "#f0e8c1",
        },
      });

      map.addLayer({
        id: "umbulharjo",
        type: "fill",
        source: "umbulharjo",
        paint: {
          "fill-color": "#f0e8c1",
        },
      });
    });

    map.on("mouseover", "umbulharjo", (e) => {
      const features = map.querySourceFeatures("umbulharjo");
      const { provinsi, kecamatan, kelurahan, pria, perempuan, jumlahmassa } =
        features[0]?.properties;
      setCensus({
        provinsi,
        kecamatan,
        kelurahan,
        pria,
        perempuan,
        jumlahmassa,
      });
    });

    map.on("mouseover", "kotagede", (e) => {
      const features = map.querySourceFeatures("kotagede");
      const { provinsi, kecamatan, kelurahan, pria, perempuan, jumlahmassa } =
        features[0]?.properties;
      setCensus({
        provinsi,
        kecamatan,
        kelurahan,
        pria,
        perempuan,
        jumlahmassa,
      });
    });

    map.on("mouseover", "danurejan", (e) => {
      const features = map.querySourceFeatures("danurejan");
      const { provinsi, kecamatan, kelurahan, pria, perempuan, jumlahmassa } =
        features[0]?.properties;
      setCensus({
        provinsi,
        kecamatan,
        kelurahan,
        pria,
        perempuan,
        jumlahmassa,
      });
    });

    map.on("mouseover", "tegalrejo", (e) => {
      const features = map.querySourceFeatures("tegalrejo");
      const { provinsi, kecamatan, kelurahan, pria, perempuan, jumlahmassa } =
        features[0]?.properties;
      setCensus({
        provinsi,
        kecamatan,
        kelurahan,
        pria,
        perempuan,
        jumlahmassa,
      });
    });

    map.on("mouseover", "jetis", (e) => {
      const features = map.querySourceFeatures("jetis");
      const { provinsi, kecamatan, kelurahan, pria, perempuan, jumlahmassa } =
        features[0]?.properties;
      setCensus({
        provinsi,
        kecamatan,
        kelurahan,
        pria,
        perempuan,
        jumlahmassa,
      });
    });

    map.on("mouseleave", "umbulharjo", () => {
      setCensus({
        provinsi: "",
        kecamatan: "",
        kelurahan: "",
        pria: 0,
        perempuan: 0,
        jumlahmassa: 0,
      });
    });

    map.on("mouseleave", "kotagede", () => {
      setCensus({
        provinsi: "",
        kecamatan: "",
        kelurahan: "",
        pria: 0,
        perempuan: 0,
        jumlahmassa: 0,
      });
    });

    map.on("mouseleave", "danurejan", () => {
      setCensus({
        provinsi: "",
        kecamatan: "",
        kelurahan: "",
        pria: 0,
        perempuan: 0,
        jumlahmassa: 0,
      });
    });

    map.on("mouseleave", "tegalrejo", () => {
      setCensus({
        provinsi: "",
        kecamatan: "",
        kelurahan: "",
        pria: 0,
        perempuan: 0,
        jumlahmassa: 0,
      });
    });

    map.on("mouseleave", "jetis", () => {
      setCensus({
        provinsi: "",
        kecamatan: "",
        kelurahan: "",
        pria: 0,
        perempuan: 0,
        jumlahmassa: 0,
      });
    });

    map.on("click", "umbulharjo", () => {
      const features = map.querySourceFeatures("umbulharjo");
      const { provinsi, kecamatan, kelurahan, pria, perempuan, jumlahmassa } =
        features[0]?.properties;

      map.flyTo({ center: [110.38062572479248, -7.823376261221806], zoom: 15, speed: 0.4 });
      setShowSideDetail(true);
      setCensusDuplicated({
        provinsi,
        kecamatan,
        kelurahan,
        pria,
        perempuan,
        jumlahmassa,
      });
    });

    map.on("click", "kotagede", () => {
      const features = map.querySourceFeatures("kotagede");
      const { provinsi, kecamatan, kelurahan, pria, perempuan, jumlahmassa } =
        features[0]?.properties;

      map.flyTo({ center: [110.39916515350342, -7.810642553416303], zoom: 15, speed: 0.4 });
      setShowSideDetail(true);
      setCensusDuplicated({
        provinsi,
        kecamatan,
        kelurahan,
        pria,
        perempuan,
        jumlahmassa,
      });
    });

    map.on("click", "danurejan", () => {
      const features = map.querySourceFeatures("danurejan");
      const { provinsi, kecamatan, kelurahan, pria, perempuan, jumlahmassa } =
        features[0]?.properties;

      map.flyTo({ center: [110.36761164665222, -7.793550288742487], zoom: 15, speed: 0.4 });
      setShowSideDetail(true);
      setCensusDuplicated({
        provinsi,
        kecamatan,
        kelurahan,
        pria,
        perempuan,
        jumlahmassa,
      });
    });

    map.on("click", "tegalrejo", () => {
      const features = map.querySourceFeatures("tegalrejo");
      const { provinsi, kecamatan, kelurahan, pria, perempuan, jumlahmassa } =
        features[0]?.properties;

      map.flyTo({ center: [110.35279512405396, -7.787767672974951], zoom: 15, speed: 0.4 });
      setShowSideDetail(true);
      setCensusDuplicated({
        provinsi,
        kecamatan,
        kelurahan,
        pria,
        perempuan,
        jumlahmassa,
      });
    });

    map.on("click", "jetis", () => {
      const features = map.querySourceFeatures("jetis");
      const { provinsi, kecamatan, kelurahan, pria, perempuan, jumlahmassa } =
        features[0]?.properties;

      map.flyTo({ center: [110.3667426109314, -7.778966038439963], zoom: 15, speed: 0.4 });
      setShowSideDetail(true);
      setCensusDuplicated({
        provinsi,
        kecamatan,
        kelurahan,
        pria,
        perempuan,
        jumlahmassa,
      });
    });

    return () => map.remove();
  }, []);

  return <div ref={mapContainer} style={{ width: "100%", height: "100vh" }}></div>;
};

export default Maps;
