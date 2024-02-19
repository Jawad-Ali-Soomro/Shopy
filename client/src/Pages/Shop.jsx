import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import "../Styles/Shop.scss";
import { addToCart, addTofvt } from "../Redux/cartActions";
import { BiCartAdd, BiHeart, BiShow, BiError } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import axios from "axios";
import { baseUrl } from "../baseUrl";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const fvt = useSelector((state) => state.fvtItems.fvtItems);
  let [productCategory, setproductCategory] = useState("Shirts");
  const [data, setData] = useState([]);
  const getProducts = async () => {
    await axios
      .post(`${baseUrl}/get/category`, { mainCat: productCategory })
      .then((res) => setData(res.data.foundProduct));
  };
  setTimeout(getProducts(), 10);

  return (
    <div className="flex shop">
      <Header />
      <div className="search-bar flex">
        <input type="text" placeholder="Search for products..." />
        <BiSearch className="search-icon" />
      </div>
      <div className="filter flex">
        <ul className="flex">
          <li
            className={`${productCategory == "Shirts" ? "active" : ""}`}
            onClick={() => setproductCategory("Shirts")}
          >
            shirts
          </li>
          <li
            className={`${productCategory == "Shoes" ? "active" : ""}`}
            onClick={() => setproductCategory("Shoes")}
          >
            shoes
          </li>
          <li
            className={`${productCategory == "Pants" ? "active" : ""}`}
            onClick={() => setproductCategory("Pants")}
          >
            pants
          </li>
          <li
            className={`${productCategory == "Bags" ? "active" : ""}`}
            onClick={() => setproductCategory("Bags")}
          >
            bags
          </li>
          <li
            className={`${productCategory == "Electronics" ? "active" : ""}`}
            onClick={() => setproductCategory("Electronics")}
          >
            electronics
          </li>
        </ul>
      </div>
      {data.length <= 0 ? (
        <div className="not-found flex col">
          <h1 style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: "6rem" }}>
              {" "}
              <BiError />
            </h1>{" "}
            Products Not Found <br /> Stay Connected!
          </h1>
        </div>
      ) : (
        <div className="new-arrivals flex">
          {data.map((item) => {
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
                            ) + toast.success("Item added to favourites!")
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
                            ) + toast.success("Item Added to cart!")
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
      )}
    </div>
  );
};

export default Shop;
