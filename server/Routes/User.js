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
userRoute.post("/login/account", loginUser);
userRoute.post("/get/profile", getProfile);
userRoute.patch("/update/password", updatePassword);
userRoute.patch("/update/profile", updateProfile);
module.exports = userRoute;
