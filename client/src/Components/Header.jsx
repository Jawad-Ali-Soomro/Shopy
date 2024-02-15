import React, { useState } from "react";
import "../Styles/Header.scss";
import {
  BiCart,
  BiCategory,
  BiHeart,
  BiHome,
  BiSearch,
  BiShoppingBag,
  BiSupport,
  BiUser,
} from "react-icons/bi";

const Header = () => {
  const [activeTab, setActiveTab] = useState("/");
  return (
    <div className="side-bar flex col">
      <div className="navs flex start">
        <ul className="flex col">
          <li
            className={activeTab == "/" ? "active" : ""}
            onClick={() => setActiveTab("/")}
            data-tool="Home"
          >
            <BiHome />
          </li>
          <li
            className={activeTab == "/shop" ? "active" : ""}
            onClick={() => setActiveTab("/shop")}
            data-tool="Shop"
          >
            <BiShoppingBag />
          </li>
          <li
            className={activeTab == "/category" ? "active" : ""}
            onClick={() => setActiveTab("/category")}
            data-tool="Categories"
          >
            <BiCategory />
          </li>
          <li
            className={activeTab == "/account" ? "active" : ""}
            onClick={() => setActiveTab("/account")}
            data-tool="Account"
          >
            <BiUser />
          </li>
        </ul>
      </div>
      <div className="icons">
        <ul className="flex col start">
          <BiHeart className="icon" />
          <BiCart className="icon" />
          <BiSearch className="icon" />
          <BiSupport className="icon" />
        </ul>
      </div>
    </div>
  );
};

export default Header;
