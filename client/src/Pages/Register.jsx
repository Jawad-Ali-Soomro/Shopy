import React, { useState } from "react";
import "../Styles/Login.scss";
import { BiEnvelope, BiKey, BiMobile, BiMobileAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../baseUrl";
import toast from "react-hot-toast";

const Register = () => {
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const registerUser = async () => {
    axios
      .post(`${baseUrl}/create/account`, {
        phone,
        email,
        password,
      })
      .then((res) =>
        res.data.message == "User already exists"
          ? toast.error(res.data.message)
          : toast.success(res.data.message) + navigate("/account")
      );
  };
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
          <input
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className="input-sect flex start">
          <p className="flex">
            <BiMobileAlt />
          </p>
          <input
            type="text"
            value={phone}
            onChange={(e) => setphone(e.target.value)}
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

        <span className="flex forgot-text">single sign-on?</span>
        <button
          className="btn-login"
          onClick={(e) => e.preventDefault() + registerUser()}
        >
          register
        </button>
        <button className="btn-register" onClick={() => navigate("/account")}>
          login
        </button>
      </form>
    </div>
  );
};

export default Register;
