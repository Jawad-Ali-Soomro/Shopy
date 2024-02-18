import axios from "axios";
import React, { useState } from "react";
import { baseUrl } from "../baseUrl";
import Header from "../Components/Header";
import "../Styles/Account.scss";
import { useDispatch, useSelector } from "react-redux";
import { addUserDetails } from "../Redux/cartActions";
import { BiLogOut, BiMoney, BiSolidLocationPlus, BiUser } from "react-icons/bi";
import toast from "react-hot-toast";

const Account = () => {
  const account = useSelector((state) => state.user.user.user);
  const dispatch = useDispatch();
  function checkCookie(name) {
    var cookieArr = document.cookie.split(";");
    for (var i = 0; i < cookieArr.length; i++) {
      var cookiePair = cookieArr[i].split("=");
      if (name === cookiePair[0].trim()) {
        return decodeURIComponent(cookiePair[1]); // Return the value of the cookie
      }
    }
    return null; // Return null if the cookie is not found
  }
  var userToken = checkCookie("userToken");
  const getUserInfo = async () => {
    const response = await axios.post(`${baseUrl}/get/profile`, {
      userToken: userToken,
    });
    dispatch(
      addUserDetails({
        username: response.data.user.username,
        email: response.data.user.email,
        phone: response.data.user.phone,
        avatar: response.data.user.avatar,
        id: response.data.user._id,
      })
    );
  };
  getUserInfo();

  return (
    <div>
      <Header />
      <div className="user-details flex col">
        <div className="profile flex">
          <p>
            <span>welcome mr &nbsp;</span>
            {account.username}
          </p>
          <img src={account.avatar} alt="" />
        </div>
        <ul className="flex col">
          <li className="flex">
            <BiUser className="icon" />
            <p>Account details</p>
          </li>
          <li className="flex">
            <BiSolidLocationPlus className="icon" />
            <p>Address details</p>
          </li>
          <li className="flex">
            <BiMoney className="icon" />
            <p>Payment details</p>
          </li>
        </ul>
        <div className="logout-btn flex" onClick={() => setshowpopup(true)}>
          <BiLogOut className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Account;
