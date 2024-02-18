import React from "react";
import "../Styles/Favourite.scss";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Components/Header";
import "../Styles/Cart.scss";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import {
  BiHappyHeartEyes,
  BiHeart,
  BiHeartCircle,
  BiHeartSquare,
  BiSolidHeart,
  BiTrash,
} from "react-icons/bi";
import { removeFromFvt } from "../Redux/cartActions";

const Favourite = () => {
  const cart = useSelector((state) => state.fvtItems.fvtItems);
  const dispatch = useDispatch();
  return (
    <div>
      <Header />
      {cart.length <= 0 ? (
        <div className="empty-cart flex col">
          <h1>
            <BiHeart />
          </h1>
          <h2>OOPs nothing found here!</h2>
          <h2>please continue shopping to have items in your favourites</h2>
        </div>
      ) : (
        <div className="cart-main flex col">
          {cart.map((item) => {
            return (
              <div className="main-item flex between" key={item.id}>
                <img src={item.image} alt="" />
                <div className="details flex col">
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                </div>

                <button
                  onClick={() => dispatch(removeFromFvt({ itemId: item.id }))}
                >
                  <BiTrash />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Favourite;
