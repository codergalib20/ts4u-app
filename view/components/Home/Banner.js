import Image from "next/image";
import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
const Banner = ({ styles }) => {
  const headerTitle = "{{ IT JOB! }}";
  return (
    <div className={styles.banner}>
      <div className="container">
        <div className={styles.banner_wrapper}>
          <div className={styles.banner_info}>
            <h1 className={styles.title}>WELCOME TO TS4U Land a ${headerTitle}</h1>
            <p className={styles.desc}>
              If you are a recent graduate or job seeker, now is the moment to
              jumpstart your career, and we will assist you in securing your
              ideal job.TS4U.us provides a comprehensive career transition
              program for students on OPT/CPT .
            </p>
            <div className={styles.search_box}>
              <span>
                <BiSearchAlt2 />
              </span>
              <input type="text" placeholder="Search your course" />
              <button>Search</button>
            </div>
          </div>
          <div className={styles.banner_image}>
            <Image src="/hero_users.png" height={580} width={500}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
