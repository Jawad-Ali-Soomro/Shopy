import React, { useState } from "react";
import "../Styles/Login.scss";
import { BiEnvelope, BiKey, BiSolidKey } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../baseUrl";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const loginUser = async () => {
    const response = await axios.post(`${baseUrl}/login/account`, {
      email,
      password,
    });
    const token = response.data.userToken;
    function setCookie() {
      return (document.cookie = `userToken=${token}`);
    }
    if (response.data.message == "User logged in successfully") {
      return toast.success("Welcome") + setCookie() + window.location.reload();
    } else {
      return toast.error(response.data.message);
    }
  };
  return (
    <div className="flex login-page" data-main="Login">
      <form action="" className="form flex col">
        <img src="./logo.png" alt="" />
        <h1>
          <span>please</span> login!
        </h1>
        <div className="input-sect flex start">
          <p className="flex">
            <BiEnvelope />
          </p>
          <input
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className="input-sect flex start">
          <p className="flex">
            <BiKey />
          </p>
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <span className="flex forgot-text">Forgot Password?</span>
        <button
          className="btn-login"
          onClick={(e) => e.preventDefault() + loginUser()}
        >
          Login
        </button>
        <button className="btn-register" onClick={() => navigate("/register")}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Login;
