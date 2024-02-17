import React from "react";
import "../Styles/Login.scss";
import { BiEnvelope, BiKey, BiMobile, BiMobileAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="flex login-page" data-main="signup">
      <form action="" className="form flex col">
        <img src="./logo.png" alt="" />
        <h1>
          <span>please</span> register!
        </h1>
        <div className="input-sect flex start">
          <p className="flex">
            <BiEnvelope />
          </p>
          <input type="email" />
        </div>
        <div className="input-sect flex start">
          <p className="flex">
            <BiMobileAlt />
          </p>
          <input type="password" />
        </div>
        <div className="input-sect flex start">
          <p className="flex">
            <BiKey />
          </p>
          <input type="password" />
        </div>

        <span className="flex forgot-text">single sign-on?</span>
        <button className="btn-login">register</button>
        <button className="btn-register" onClick={() => navigate("/account")}>
          login
        </button>
      </form>
    </div>
  );
};

export default Register;
