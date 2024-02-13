import React from "react";
import Header from "../components/Header";
import "../styles/Home.scss";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="bg"></div>
      <div className="banner flex">
        <div className="content flex col start">
          <h1>New Arrivals</h1>
          <h2>
            Explore New Collections with us where the trend meets comfort &
            enjoy shopping with us
          </h2>
          <button>Explore</button>
        </div>
        <img src="./banner.png" alt="" />
        <div className="wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="white"
              fillOpacity="1"
              d="M0,192L18.5,176C36.9,160,74,128,111,117.3C147.7,107,185,117,222,128C258.5,139,295,149,332,170.7C369.2,192,406,224,443,208C480,192,517,128,554,128C590.8,128,628,192,665,208C701.5,224,738,192,775,197.3C812.3,203,849,245,886,272C923.1,299,960,309,997,298.7C1033.8,288,1071,256,1108,218.7C1144.6,181,1182,139,1218,138.7C1255.4,139,1292,181,1329,165.3C1366.2,149,1403,75,1422,37.3L1440,0L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="new-arrivals flex ">
        <div className="big-product">
          <img src="./product-banner.png" alt="" />
        </div>
        <div className="small-products flex">
          <div className="small-product" data-content="Shoes">
            <img src="./banner.png" alt="" />
          </div>
          <div className="small-product" data-content="Purses">
            <img
              src="https://www.lochcarron.co.uk/media/catalog/product/cache/3c36a3980388d2eb9643903829ced6cc/g/s/gs-05-aus-auld-scotland-small-coin-purse-upright-72dpi-rgb_2.jpg"
              alt=""
            />
          </div>
          <div className="small-product" data-content="T Shirts">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </div>
          <div className="small-product" data-content="watches">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpjOHImt0-Axx4Qe3UwVbXyc7l3Vnpw8cSYw&usqp=CAU"
              alt=""
            />
          </div>
        </div>
      </div>

      <Products />
    </div>
  );
};

export default Home;