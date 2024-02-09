import React from "react";
import Header from "../components/Header";
const Home = () => {
  const data = [
    {
      image: "./picture.png",
      title: "Nike Free Air Force",
      price: "Rs. 12000",
    },
    {
      image: "./picture-2.png",
      title: "Nike Bascket Ball Sportwear",
      price: "Rs. 15000",
    },
    {
      image: "./picture-3.png",
      title: "Adidas Shoe Sneakers",
      price: "Rs. 10000",
    },
    {
      image: "./picture-2.png",
      title: "Sneakers Air Jordan",
      price: "Rs. 8000",
    },
    {
      image: "./picture.png",
      title: "Sneakers Skate Shoes",
      price: "Rs. 7000",
    },
    {
      image: "./picture-3.png",
      title: "Nike Air Max",
      price: "Rs. 16000",
    },
  ];
  return (
    <div>
      <Header />
      <div className="hero-sect flex">
        <div className="content">
          <h1>
            <span>Walk</span> Your Style.
          </h1>
          <p>
            Step into timeless style, where confidence fuels every stride.
            Embark on your journey with each deliberate step.
          </p>
          <p>- The Exclusive Collection</p>
          <button>Explore Now</button>
        </div>
        <div className="image-sect">
          <img src="./picture.png" alt="" />
        </div>
      </div>
      <div className="products flex">
        {data.map((item, index) => {
          return (
            <div className="product flex" key={index}>
              <img src={item.image} alt="" />
              <p>{item.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
