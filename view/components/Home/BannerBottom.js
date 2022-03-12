import React from "react";

const BannerBottom = ({ styles }) => {
  return (
    <div className={styles.banner_bottom}>
      <div className={styles.section_one}>
        <div className="container">
          <div className={styles.section_one_wrapper}>
            <div className={styles.countdown}>
              <div>
                <h1>50+</h1>
                <span>Course</span>
              </div>
              <div>
                <h1>5k</h1>
                <span>Students</span>
              </div>
              <div>
                <h1>2k</h1>
                <span>Certificates</span>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className={styles.section_two}></div>
    </div>
  );
};

export default BannerBottom;
