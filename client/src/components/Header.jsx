import React, { useState, useEffect } from "react";
import "../styles/Header.scss";
import { BiCart, BiHeart, BiSearchAlt2 } from "react-icons/bi";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 600) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="header flex col"
      style={{
        background: `${isScrolled == true ? "white" : "transparent"}`,
      }}
    >
      <div className="top flex between">
        <a
          href="/"
          className="logo"
          style={{ color: `${isScrolled == true ? "orange" : "white"}` }}
        >
          <span></span>shopy
        </a>
        <div
          className="icons flex"
          style={{ color: `${isScrolled == true ? "orange" : "white"}` }}
        >
          <div className="search">
            <BiSearchAlt2 className="icon" />
          </div>
          <div data-content="0" className="icon">
            <BiHeart className="icon" />
          </div>
          <div className="icon" data-content="0">
            <BiCart className="icon" />
          </div>
          <button
            style={{
              background: `${
                isScrolled == true ? "orange" : "rgba(255,255,255,.2)"
              }`,
            }}
          >
            Login
          </button>
        </div>
      </div>
      <div className="bottom flex">
        <div
          className="navs"
          style={{ color: `${isScrolled == true ? "orange" : "white"}` }}
        >
          <ul className="flex">
            <li data-content="New" data-bg="blue">
              Shop
            </li>
            <li data-content="Deals" className="red">
              Deals
            </li>
            <li className="not" data-bg="blueviolet">
              collections
            </li>
            <li data-content="Hot" className="orange">
              Sale
            </li>
            <li className="not">blog</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

//

//
