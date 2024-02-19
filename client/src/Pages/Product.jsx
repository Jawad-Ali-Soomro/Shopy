import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseUrl } from "../baseUrl";
import "../Styles/Product.scss";
import { BiCart, BiCartAdd, BiHeart } from "react-icons/bi";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addTofvt } from "../Redux/cartActions";

const Product = () => {
  const cart = useSelector((state) => state.cart.items);
  const fvt = useSelector((state) => state.fvtItems.fvtItems);

  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const getData = async () => {
    const { id } = useParams();
    await axios
      .get(`${baseUrl}/get/product/${id}`)
      .then((res) => setData(res.data.foundProduct));
  };

  getData();

  return (
    <div className="product-main flex">
      <img src={data.image} alt="" />
      <div className="information flex col start">
        <h1>{data.productName}</h1>
        <h1>{data.productCategory}</h1>
        <h1>{data.productDescription}</h1>
        <h1>${data.price}</h1>
        <h1>stock: {data.quantity}</h1>
        <div className="icons flex">
          <p
            onClick={() =>
              fvt.some((cartId) => cartId.id == data._id)
                ? toast.error("Item Exists In favourites")
                : dispatch(
                    addTofvt({
                      id: data._id,
                      name: data.productName,
                      description: data.productDescription,
                      image: data.image,
                      price: data.price,
                    })
                  ) + toast.success("Item added to favourites!")
            }
          >
            {" "}
            <BiHeart />
          </p>
          <p
            onClick={() =>
              cart.some((cartId) => cartId.id == data._id)
                ? toast.error("Item Exists In Cart")
                : dispatch(
                    addToCart({
                      id: data._id,
                      name: data.productName,
                      description: data.productDescription,
                      image: data.image,
                      price: data.price,
                    })
                  ) + toast.success("Item Added To Cart!")
            }
          >
            {" "}
            <BiCartAdd />
          </p>
        </div>
        <button>Buy now</button>
      </div>
    </div>
  );
};

export default Product;
