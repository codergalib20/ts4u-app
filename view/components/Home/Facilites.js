import React, { useEffect, useState } from "react";
import Facilitie from "./Facilitie";

const Facilites = ({ styles }) => {
  const [facilities, setFacilities] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setFacilities(data));
  }, []);

  return (
    <div className={styles.our_facilities}>
      <div className="container">
        <div className={styles.header}>
          <h1>Our Facilites</h1>
          <p>
            If you are a recent graduate or job seeker, now is the moment to
            jumpstart your career, and we will assist you in securing your ideal
            job. TS4U
          </p>
        </div>
        <div className={styles.boxes}>
          {facilities.map((facilitie, index) => (
            <Facilitie key={index} facilitie={facilitie} styles={styles} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facilites;
