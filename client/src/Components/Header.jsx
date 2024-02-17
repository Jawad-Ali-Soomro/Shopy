import React, { useState } from "react";
import "../Styles/Header.scss";
import {
  BiCart,
  BiCategory,
  BiHeart,
  BiHome,
  BiShoppingBag,
  BiUser,
} from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const image = useSelector((userState) => userState.user.user.user);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(window.location.pathname);
  return (
    <div className="side-bar flex col">
      <div className="logo">
        <img src="./logo.png" alt="" onClick={() => navigate("/")} />
      </div>
      <div className="navs flex start">
        <ul className="flex col">
          <li
            className={activeTab == "/" ? "active" : ""}
            onClick={() => navigate("/")}
            data-tool="Home"
          >
            <BiHome />
          </li>
          <li
            className={activeTab == "/shop" ? "active" : ""}
            onClick={() => navigate("/shop")}
            data-tool="Shop"
          >
            <BiShoppingBag />
          </li>
          <li
            className={activeTab == "/category" ? "active" : ""}
            onClick={() => navigate("/category")}
            data-tool="Categories"
          >
            <BiCategory />
          </li>
          <li
            className={activeTab == "/account" ? "active" : ""}
            onClick={() => navigate("/account")}
            data-tool="Account"
          >
            {image.avatar !== undefined ? (
              <img src={image.avatar} alt="" className="avatar" />
            ) : (
              <BiUser />
            )}
          </li>
        </ul>
      </div>
      <div className="icons">
        <ul className="flex col start">
          <p className="icon flex" data-cart="0">
            <BiHeart />
          </p>
          <p
            className="flex icon"
            data-cart={cart.items.length}
            style={{
              background: `${
                window.location.pathname == "/cart" ? "orange" : ""
              }`,
              color: `${
                window.location.pathname == "/cart" ? "white" : "black"
              }`,
            }}
            onClick={() => navigate("/cart")}
          >
            <BiCart />
          </p>
        </ul>
      </div>
    </div>
  );
};

export default Header;
