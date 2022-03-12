import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="header">
      <div className="container">
        <div className="header_wrapper">
          <div className="header_logo">
            <Link href="/kk">
              <Image src="/main_logo.png" alt="logo" height={50} width={200} />
            </Link>
          </div>
          <div
            className="menu_open_icon"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <RiMenu3Fill />
          </div>
          <div className="header_menus_buttons" id={openMenu ? "active" : ""}>
            <div
              className="menu_close_icon"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <MdOutlineClose />
            </div>
            <div className="header_nav">
              <ul className="nav_items">
                <li className="nav_item">
                  <Link href="/">Home</Link>
                </li>
                <li className="nav_item">
                  Program <FiChevronDown />
                  <ul className="dropdown_items">
                    <li className="dropdown_item">
                      <Link href="/dropdown">Program One</Link>
                    </li>
                    <li className="dropdown_item">
                      <Link href="/dropdown">Program Two</Link>
                    </li>
                    <li className="dropdown_item">
                      <Link href="/dropdown">Program Three</Link>
                    </li>
                    <li className="dropdown_item">
                      <Link href="/dropdown">Program Four</Link>
                    </li>
                    <li className="dropdown_item">
                      <Link href="/dropdown">Program Five</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav_item">
                  Immigration <FiChevronDown />
                  <ul className="dropdown_items">
                    <li className="dropdown_item">
                      <Link href="/dropdown">Immigration One</Link>
                    </li>
                    <li className="dropdown_item">
                      <Link href="/dropdown">Immigration Two</Link>
                    </li>
                    <li className="dropdown_item">
                      <Link href="/dropdown">Immigration Three</Link>
                    </li>
                    <li className="dropdown_item">
                      <Link href="/dropdown">Immigration Four</Link>
                    </li>
                    <li className="dropdown_item">
                      <Link href="/dropdown">Immigration Five</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav_item">
                  <Link href="/blog">Blog</Link>
                </li>
                <li className="nav_item">
                  <Link href="/about">About Us</Link>
                </li>
                <li className="nav_item">
                  <Link href="/contact">Contact</Link>
                </li>
                <li className="nav_item">
                  Career <FiChevronDown />
                  <ul className="dropdown_items">
                    <li className="dropdown_item">
                      <Link href="/dropdown">Career One</Link>
                    </li>
                    <li className="dropdown_item">
                      <Link href="/dropdown">Career Two</Link>
                    </li>
                    <li className="dropdown_item">
                      <Link href="/dropdown">Career Three</Link>
                    </li>
                    <li className="dropdown_item">
                      <Link href="/dropdown">Career Four</Link>
                    </li>
                    <li className="dropdown_item">
                      <Link href="/dropdown">Career Five</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="header_buttons">
              <button>Sign In</button>
              <button>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
