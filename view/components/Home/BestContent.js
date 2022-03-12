import React from "react";
import { HiChevronDoubleRight } from 'react-icons/hi';

const BestContent = ({ styles }) => {
  return (
    <div className={styles.best_content}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <h2>We Provide Best IT Training and Job Placement in USA</h2>
            <p>
              In the event that you are an entry-level graduate or Jobseeker,
              now is the moment to jumpstart your career, and we will assist you
              in landing your ideal job.
            </p>
            <p>
              Additionally, this course is intended for immigrants who arrive in
              the United States from their native country and work odd jobs that
              do not provide a stable future owing to low wages. Additionally,
              for individuals who lack formal IT experience but have a desire to
              work with large, well-known IT businesses. We ve covered them all
              since we started from the ground up. We guarantee that each and
              every student gets a job with us by providing appropriate IT
              knowledge from the start and developing the person as a pro in the
              field.
            </p>
            <button>Read More  <HiChevronDoubleRight/></button>
          </div>
          <div className={styles.image}>
            <img src="/group_img.png" alt="Group Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestContent;
