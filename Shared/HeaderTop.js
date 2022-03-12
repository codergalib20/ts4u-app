import React from "react";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { FaSlackHash, FaYoutubeSquare } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { ImSearch } from "react-icons/im";
import { IoIosCall } from "react-icons/io";
const HeaderTop = () => {
  return (
    <div className="container">
      <div className="header_top_wrapper">
        <div className="left_items">
          <a className="left_item" href="tel:">
            <span>
              <IoIosCall />
            </span>
            +(1)586_276_7347
          </a>
          <a className="left_item" href="">
            <span>
              <HiOutlineMail />
            </span>
            info@Ts4u.Us
          </a>
          <a className="left_item" href="">
            <span>
              <ImSearch />
            </span>
            Warren, MI
          </a>
        </div>
        <div className="right_items">
          <a className="right_item" href="#">
            <AiFillFacebook />
          </a>
          <a className="right_item" href="#">
            <FaYoutubeSquare />
          </a>
          <a className="right_item" href="#">
            <AiFillLinkedin />
          </a>
          <a className="right_item" href="#">
            <FaSlackHash />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
