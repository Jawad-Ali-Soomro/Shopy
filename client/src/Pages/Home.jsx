import React, { useState } from "react";
import "../Styles/Home.scss";
import { addToCart, addTofvt } from "../Redux/cartActions";
import {
  BiCartAdd,
  BiHeart,
  BiMoneyWithdraw,
  BiSolidTruck,
  BiSupport,
  BiShow,
} from "react-icons/bi";
import Header from "../Components/Header";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import axios from "axios";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.items);
  const fvt = useSelector((state) => state.fvtItems.fvtItems);
  const [product_data, setproduct_data] = useState([]);
  const getData = async () => {
    await axios
      .get(`${baseUrl}/get/products`)
      .then((res) => setproduct_data(res.data.foundProducts));
  };
  getData();
  const dispatch = useDispatch();
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
          <p>Shipping Worldwide!</p>
        </div>
        <div className="card flex col">
          <BiMoneyWithdraw className="icon" />
          <p>simple return policy!</p>
        </div>
        <div className="card flex col">
          <BiSupport className="icon" />
          <p> customer support!</p>
        </div>
      </div>
      <div className="new-arrivals flex">
        {product_data.map((item) => {
          return (
            <div className="product flex" key={item._id}>
              <img src={item.image} alt="" />
              <div className="details flex col">
                <div className="icons flex">
                  <BiHeart
                    className="icon"
                    onClick={() =>
                      fvt.some((cartId) => cartId.id == item._id)
                        ? toast.error("Item Exists In favourites")
                        : dispatch(
                            addTofvt({
                              id: item._id,
                              name: item.productName,
                              description: item.productDescription,
                              image: item.image,
                              price: item.price,
                            })
                          )
                    }
                  />
                  <BiCartAdd
                    className="icon"
                    onClick={() =>
                      cart.some((cartId) => cartId.id == item._id)
                        ? toast.error("Item Exists In Cart")
                        : dispatch(
                            addToCart({
                              id: item._id,
                              name: item.productName,
                              description: item.productDescription,
                              image: item.image,
                              price: item.price,
                            })
                          )
                    }
                  />
                  <BiShow
                    className="icon"
                    onClick={() => navigate(`/product/${item._id}`)}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
