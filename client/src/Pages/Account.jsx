import axios from "axios";
import React from "react";
import { baseUrl } from "../baseUrl";
import Header from "../Components/Header";
import "../Styles/Account.scss";
import { useDispatch, useSelector } from "react-redux";
import { addUserDetails } from "../Redux/cartActions";
import { BiLogOut } from "react-icons/bi";
function logout() {
  document.cookie =
    "userToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

const Account = () => {
  const handleLogout = () => {
    logout();
    window.location.reload();
  };
  const account = useSelector((state) => state.user.user.user);
  const dispatch = useDispatch();
  function checkCookie(name) {
    var cookieArr = document.cookie.split(";");
    for (var i = 0; i < cookieArr.length; i++) {
      var cookiePair = cookieArr[i].split("=");
      if (name === cookiePair[0].trim()) {
        return decodeURIComponent(cookiePair[1]);
      }
    }
    return null;
  }
  var userToken = checkCookie("userToken");
  const getUserInfo = async () => {
    const response = await axios.post(`${baseUrl}/get/profile`, {
      userToken: userToken,
    });
    if (userToken) {
      dispatch(
        addUserDetails({
          username: response.data.user.username,
          email: response.data.user.email,
          phone: response.data.user.phone,
          avatar: response.data.user.avatar,
          id: response.data.user._id,
        })
      );
    } else {
    }
  };
  getUserInfo();
  // console.log(account);
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
        <img className="main-img" src={account.avatar} alt="" />
        <h1>{account.username}</h1>
        <h1>{account.email}</h1>
        <h1>{account.phone}</h1>
        <button>update</button>
        <div className="logout-btn flex" onClick={handleLogout}>
          <BiLogOut className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Account;
