import React from "react";
import "../Styles/Login.scss";
import { BiEnvelope, BiKey, BiSolidKey } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
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
          <input type="email" />
        </div>
        <div className="input-sect flex start">
          <p className="flex">
            <BiKey />
          </p>
          <input type="password" />
        </div>
        <span className="flex forgot-text">Forgot Password?</span>
        <button className="btn-login">Login</button>
        <button className="btn-register" onClick={() => navigate("/register")}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Login;
