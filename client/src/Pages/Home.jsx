import React from "react";
import "../Styles/Home.scss";
import { addToCart } from "../Redux/cartActions";
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

const Home = () => {
  const cart = useSelector((state) => state.cart.items);
  const product_data = [
    {
      id: 1,
      Name: "Aaroon Judge",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d61932f2-7a44-47dd-9031-d6ce720bb9ed/aaron-judge-new-york-yankees-mens-dri-fit-adv-elite-jersey-TD1nXn.png",
      price: "395",
    },
    {
      id: 2,
      Name: "Fransisco Linder",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/71eb736d-6d75-4a0a-bdd4-c4fcfc562dea/francisco-lindor-new-york-mets-mens-dri-fit-adv-elite-jersey-J82qFV.png",
      price: "395",
    },
    {
      id: 3,
      Name: "Adley rutschame",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/37994f60-3f6f-46f9-8c8e-180092016e1f/adley-rutschman-baltimore-orioles-mens-dri-fit-adv-elite-jersey-H7r9hC.png",
      price: "395",
    },
    {
      id: 4,
      Name: "Bobby Witt",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/04880fa8-65ef-4b78-b5de-85525690a82d/bobby-witt-jr-kansas-city-royals-mens-dri-fit-adv-elite-jersey-ZXJqTM.png",
      price: "395",
    },
    {
      id: 5,
      Name: "Fernando Tatis",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e1c705cc-9894-4fe4-9ccb-f566b5fd43ef/manny-machado-san-diego-padres-mens-dri-fit-adv-elite-jersey-NDLbQG.png",
      price: "395",
    },
    {
      id: 6,
      Name: "Carlos Corea",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/521e4df3-2c75-4f57-b4f8-a75c325da01e/carlos-correa-minnesota-twins-mens-dri-fit-adv-elite-jersey-RLZ1cQ.png",
      price: "395",
    },
    {
      id: 7,
      Name: "david ortis",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ca085d8-7162-4240-a7c3-c0e4cda18fb6/david-ortiz-boston-red-sox-mens-dri-fit-adv-elite-jersey-W44bb9.png",
      price: "395",
    },
    {
      id: 8,
      Name: "Ronaldo Acuna",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/06a8b830-ebb7-4e7c-9756-8290dad2e3b5/ronald-acu%C3%B1a-jr-atlanta-braves-mens-dri-fit-adv-elite-jersey-rZHZfk.png",
      price: "395",
    },
    {
      id: 9,
      Name: "Vladimir Gurreiro",
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/997ff87f-0c76-415b-b87a-ec9b404586d1/vladimir-guerrero-jr-toronto-blue-jays-mens-dri-fit-adv-elite-jersey-CSncFk.png",
      price: "395",
    },
  ];
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
            <div className="product flex" key={item.id}>
              <img src={item.image} alt="" />
              <div className="details flex col">
                <div className="icons flex">
                  <BiHeart className="icon" />
                  <BiCartAdd
                    className="icon"
                    onClick={() =>
                      cart.some((cartId) => cartId.id == item.id)
                        ? toast.error("Item Exists In Cart")
                        : dispatch(
                            addToCart({
                              id: item.id,
                              name: item.Name,
                              description: item.description,
                              image: item.image,
                              price: item.price,
                            })
                          )
                    }
                  />
                  <BiShow className="icon" />
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
