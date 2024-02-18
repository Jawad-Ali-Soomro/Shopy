import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { baseUrl } from "../baseUrl";
import "../Styles/Product.scss";
import { BiCart, BiCartAdd, BiHeart } from "react-icons/bi";

const Product = () => {
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
          <p>
            {" "}
            <BiHeart />
          </p>
          <p>
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
