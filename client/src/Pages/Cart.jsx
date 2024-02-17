import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Components/Header";
import "../Styles/Cart.scss";
import { BiTrash } from "react-icons/bi";
import { removeFromCart } from "../Redux/cartActions";
import { FiShoppingCart } from "react-icons/fi";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  return (
    <div>
      <Header />
      {cart.length <= 0 ? (
        <div className="empty-cart flex col">
          <h1>
            <FiShoppingCart />
          </h1>
          <h2>OOPs nothing found here!</h2>
          <h2>please continue shopping to have items in your cart</h2>
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
                  onClick={() => dispatch(removeFromCart({ itemId: item.id }))}
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

export default Cart;
