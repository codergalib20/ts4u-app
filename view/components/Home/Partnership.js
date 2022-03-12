import Image from "next/image";
import React from "react";

const Partnership = ({ styles }) => {
  return (
    <div className={styles.partnership}>
      <div className="container">
        <h1>Our Partnerships</h1>
        <div className={styles.partnership_wrapper}>
          <div>
            <Image src="/google.png" width={120} height={40} />
          </div>
          <div>
            <Image src="/amazon.png" width={120} height={40} />
          </div>
          <div>
            <Image src="/yahoo.png" width={120} height={40} />
          </div>
          <div>
            <Image src="/microsoft.png" width={120} height={40} />
          </div>
          <div>
            <Image src="/facebook.png" width={120} height={40} />
          </div>
          <div>
            <Image src="/slack.png" width={120} height={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnership;
