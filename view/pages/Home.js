import React from "react";
import Header from "../../Shared/Header";
import HeaderTop from "../../Shared/HeaderTop";
import Banner from "../components/Home/Banner";
import BannerBottom from "../components/Home/BannerBottom";
import BestContent from "../components/Home/BestContent";
import Facilites from "../components/Home/Facilites";
import Partnership from "../components/Home/Partnership";
import Welcome from "../components/Home/Welcome";
const Home = ({ styles }) => {
  return (
    <div>
      <HeaderTop />
      <nav style={{ background: "#062539" }}>
        <Header />
      </nav>
      <div style={{ position: "relative" }}>
        <Banner styles={styles} />
        <BannerBottom styles={styles} />
      </div>
      <div>
        <Partnership styles={styles} />
      </div>
      <div>
        <Welcome styles={styles} />
      </div>
      <div>
        <BestContent styles={styles} />
      </div>
      <div>
        <Facilites styles={styles} />
      </div>
    </div>
  );
};

export default Home;
