import Image from "next/image";
import React from "react";
import { AiFillYoutube, AiOutlineInstagram } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn, FaSlackHash } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { ImSearch, ImWhatsapp } from 'react-icons/im';
import { MdCall, MdLocationOn } from 'react-icons/md';
const Footer = ({ styles }) => {
  return (
    <div className={styles.footer_section}>
      <div className="container">
        <div className={styles.wrapper}>
        <div className={styles.footer_column}>
          <Image src="/logo.png" height={80} width={230} />
          <p>
            If you are a recent graduate or job seeker, now is the moment to
            jumpstart your career, and we will assist you in securing your ideal
            job.TS4U.
          </p>
        </div>
        <div className={styles.footer_column}>
          <h2>Contact Us</h2>
          <strong>Head Office:</strong>
          <div className={styles.footer_column_with_icons}>
            <div className={styles.icon_item}>
              <MdLocationOn/>
            </div>
            <div>
              <p>
                28751 Ryan Road, 48092Warren, Michigan 48092 Opposite of IONA
                Masjid (12 Mile)
              </p>
            </div>
          </div>
          <div className={styles.footer_column_with_icons}>
            <div className={styles.icon_item}><MdCall/></div>
            <div><ul><li>+(1)(586) 276-7347</li><li>+(571) 308-9241</li></ul></div>
          </div>
          <div className={styles.footer_column_with_icons}>
            <div className={styles.icon_item}><HiOutlineMail/></div>
            <div>info@Ts4u.Us</div>
          </div>
        </div>
        <div className={styles.footer_column}>
          <h2>Our Programs</h2>
          <ul>
            <li>Software Quality Automation</li>
            <li>Engineer</li>
            <li>CloudOps Engineer</li>
            <li>Professional Job Support</li>
            <li>Demo CloudOps Engineer</li>
            <li>Vehicle Validation Engineer</li>
            <li>Product Owner</li>
            <li>H-1B</li>
          </ul>
        </div>
        <div className={styles.footer_column}>
          <h2>Quick Links</h2>
          <ul>
            <li>About Us</li>
            <li>Refund Policy</li>
            <li>Privacy Policy</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className={styles.footer_column}>
          <h1>Follow Us</h1>
          <div className={styles.social_icons_box}>
             <div className={styles.icon_item}><FaFacebookF/></div>
             <div className={styles.icon_item}><AiFillYoutube/></div>
             <div className={styles.icon_item}><FaLinkedinIn/></div>
             <div className={styles.icon_item}><FaSlackHash/></div>
             <div className={styles.icon_item}><BsTwitter/></div>
             <div className={styles.icon_item}><AiOutlineInstagram/></div>
             <div className={styles.icon_item}><ImSearch/></div>
             <div className={styles.icon_item}><ImWhatsapp/></div>
          </div>
        </div>
        </div>
        <div className={styles.divider}></div>
      </div>
    </div>
  );
};

export default Footer;
