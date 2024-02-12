const express = require("express");
const {
  createAccount,
  loginUser,
  getProfile,
  updatePassword,
  updateProfile,
} = require("../Services/User");
const userRoute = express.Router();
userRoute.post("/create/account", createAccount);
userRoute.get("/login/account", loginUser);
userRoute.get("/get/profile", getProfile);
userRoute.patch("/update/password", updatePassword);
userRoute.patch("/update/profile", updateProfile);
module.exports = userRoute;
