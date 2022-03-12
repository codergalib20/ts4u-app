import Image from "next/image";
import React from "react";
import { HiChevronDoubleRight } from 'react-icons/hi';

const Welcome = ({ styles }) => {
  return (
    <div className={styles.welcome_section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.image}>
            <div className={styles.img}>
              <div className={styles.back_box}></div>
              <Image src="/welcome.png" height={450} width={450} />
              <div className={styles.chart}>
                <Image src="/chart.png" height={200} width={200} />
              </div>
              <div className={styles.badge}>
                <Image src="/badge.png" height={120} width={230} />
              </div>
            </div>
          </div>
          <div className={styles.info}>
            <h2>TS4U is the Best IT Training and Job Placement in USA</h2>
            <p>
              If you are a recent graduate or job seeker, now is the moment to
              jumpstart your career, and we will assist you in securing your
              ideal job.TS4U.us provides a comprehensive career transition
              program for students on OPT/CPT and other EAD/GC/USC graduates
              seeking employment opportunities in the United States. This
              training is also intended for immigrants who have fled their home
              countries and now find themselves in the United States, doing odd
              jobs that do not provide them with the financial security they
              need for the future. Additionally, for individuals who do not have
              a strong experience in IT but nevertheless want to work for large,
              well-known IT firms.
            </p>
            <button>Read More <HiChevronDoubleRight/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
