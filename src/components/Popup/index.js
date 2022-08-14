import React, { useEffect } from "react";
import styles from "./Popup.module.css";

const Popup = ({ provinsi, kelurahan, pria, perempuan, jumlahmassa, mousePosition }) => {
  useEffect(() => {
    const element = document.querySelector("#popUp");
    if (provinsi) {
      element.style.display = "block";
      element.style.top = `${mousePosition.clientY + 10}px`;
      element.style.left = `${mousePosition.clientX + 10}px`;
    } else {
      element.style.display = "none";
    }
  }, [mousePosition]);

  return (
    <div id="popUp" className={styles.popUp} style={{ position: "absolute", zIndex: 10 }}>
      <h1 className={styles.provinsi}>{provinsi}</h1>
      <h4 className={styles.kelurahan}>{kelurahan}</h4>
      <div className={styles.manContainer}>
        <p>Laki - laki :</p>
        <p>{pria}</p>
      </div>
      <div className={styles.womenContainer}>
        <p>Perempuan :</p>
        <p>{perempuan}</p>
      </div>
      <div className={styles.allContainer}>
        <p>Total :</p>
        <p>{jumlahmassa}</p>
      </div>
      <p className={styles.note}>*click to hold the card</p>
    </div>
  );
};

export default Popup;
