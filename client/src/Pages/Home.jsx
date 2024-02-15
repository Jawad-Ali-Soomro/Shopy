import React from "react";
import "../Styles/Home.scss";
import {
  BiCartAdd,
  BiHeart,
  BiMoneyWithdraw,
  BiSolidTruck,
  BiSupport,
  BiShow,
} from "react-icons/bi";
import Header from "../Components/Header";

const Home = () => {
  return (
    <div className="flex col">
      <Header />
      <div className="banner flex">
        <div className="banner-image flex">
          <img src="./banner.png" alt="" />
          <div className="add-to-cart-sect flex">
            <p>$100</p>
            <button className="flex">
              <BiCartAdd className="cart" />
            </button>
          </div>
        </div>
        <div className="catalogue flex col">
          <div className="catalog-item">
            <img src="./shoes/banner-image-2.png" alt="" />
          </div>
          <div className="catalog-item">
            <img src="./shoes/banner-image-3.png" alt="" />
          </div>
          <div className="catalog-item">
            <img src="./shoes/banner-image-4.png" alt="" />
          </div>
        </div>
      </div>
      <div className="services flex">
        <div className="card flex col">
          <BiSolidTruck className="icon" />
          <p> Fast Shipping Worldwide!</p>
        </div>
        <div className="card flex col">
          <BiMoneyWithdraw className="icon" />
          <p>simle return policy!</p>
        </div>
        <div className="card flex col">
          <BiSupport className="icon" />
          <p> customer support!</p>
        </div>
      </div>
      <div className="new-arrivals flex">
        <div className="product flex">
          <img src="./shirts/shirt-1.png" alt="" />
          <div className="details flex col">
            <div className="icons flex">
              <BiHeart className="icon" />
              <BiCartAdd className="icon" />
              <BiShow className="icon" />
            </div>
          </div>
        </div>
        <div className="product flex">
          <img src="./shirts/shirt-4.png" alt="" />
          <div className="details flex col">
            <div className="icons flex">
              <BiHeart className="icon" />
              <BiCartAdd className="icon" />
              <BiShow className="icon" />
            </div>
          </div>
        </div>
        <div className="product flex">
          <img src="./shirts/shirt-5.png" alt="" />
          <div className="details flex col">
            <div className="icons flex">
              <BiHeart className="icon" />
              <BiCartAdd className="icon" />
              <BiShow className="icon" />
            </div>
          </div>
        </div>
        <div className="product flex">
          <img src="./shirts/shirt-6.png" alt="" />
          <div className="details flex col">
            <div className="icons flex">
              <BiHeart className="icon" />
              <BiCartAdd className="icon" />
              <BiShow className="icon" />
            </div>
          </div>
        </div>
        <div className="product flex">
          <img src="./shirts/shirt-2.png" alt="" />
          <div className="details flex col">
            <div className="icons flex">
              <BiHeart className="icon" />
              <BiCartAdd className="icon" />
              <BiShow className="icon" />
            </div>
          </div>
        </div>
        <div className="product flex">
          <img src="./shirts/shirt-3.png" alt="" />
          <div className="details flex col">
            <div className="icons flex">
              <BiHeart className="icon" />
              <BiCartAdd className="icon" />
              <BiShow className="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
