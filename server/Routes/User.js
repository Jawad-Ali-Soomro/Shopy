const express = require("express");
const { createAccount, loginUser, getProfile } = require("../Services/User");
const userRoute = express.Router();
userRoute.post("/create/account", createAccount);
userRoute.get("/login/account", loginUser);
userRoute.get("/get/profile", getProfile);
module.exports = userRoute;
