import React from "react";
import { BiHeart, BiShoppingBag, BiSearchAlt2 } from "react-icons/bi";

const Header = () => {
  return (
    <div className="flex header around">
      <div className="logo">
        <a href="/">
          Kix
          <img
            src="https://parspng.com/wp-content/uploads/2023/02/shoespng.parspng.com-7-300x300.png"
            alt=""
          />
        </a>
      </div>
      <div className="navs">
        <ul className="flex">
          <li>Collections</li>
          <li>Categories</li>
          <li>Shop</li>
          <li>Brands</li>
        </ul>
      </div>
      <div className="icons flex">
        <BiSearchAlt2 className="icon" />
        <BiHeart className="icon" />
        <div className="cart flex" data-content="2">
          <BiShoppingBag className="icon" />
        </div>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Header;
