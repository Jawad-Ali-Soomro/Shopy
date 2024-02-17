import React from "react";
import Header from "../Components/Header";
import "../Styles/Shop.scss";
import { BiSearch } from "react-icons/bi";

const Shop = () => {
  return (
    <div className="flex shop">
      <Header />
      <div className="search-bar flex">
        <input type="text" placeholder="Search for products..." />
        <BiSearch className="search-icon" />
      </div>
      <div className="filter flex">
        <ul className="flex">
          <li>Brands </li>
          <li>Colors</li>
          <li>Men</li>
          <li>women</li>
          <li>toys</li>
        </ul>
      </div>
    </div>
  );
};

export default Shop;
