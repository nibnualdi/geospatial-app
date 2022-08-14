import React from "react";
import styles from "./SideDetaile.module.css";

const SideDetail = ({
  provinsi,
  kelurahan,
  pria,
  perempuan,
  jumlahmassa,
  showSideDetail,
  setShowSideDetail,
}) => {
  return (
    <>
      {showSideDetail && (
        <div
          className={styles.container}
          style={{ position: "absolute", right: 0, height: "100vh", zIndex: 1000 }}
        >
          <div>
            <h1>{provinsi}</h1>
            <h4>{kelurahan}</h4>
            <div>
              <p>Laki - laki :</p>
              <p>{pria}</p>
            </div>
            <div>
              <p>Perempuan :</p>
              <p>{perempuan}</p>
            </div>
            <div>
              <p>Total :</p>
              <p>{jumlahmassa}</p>
            </div>
          </div>

          <button
            onClick={() => {
              setShowSideDetail(false);
            }}
            className={styles.button}
          >
            close
          </button>
        </div>
      )}
    </>
  );
};

export default SideDetail;
