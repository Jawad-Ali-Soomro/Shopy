const { encryptPassword, decryptPassword } = require("../Middlewares/Security");
const { createToken, compareToken } = require("../Middlewares/Token");
const User = require("../Models/User");
const bcrypt = require("bcryptjs");

exports.createAccount = async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await User.findOne({ email });
    if (findUser) {
      return res.json({ message: "User already exists" });
    } else {
      const hashedPassword = await encryptPassword({ password });
      const createdAccount = await User.create({
        ...req.body,
        password: hashedPassword,
      });
      return res.json({
        message: "User account created successfully",
        user: createdAccount,
      });
    }
  } catch (error) {
    return res.json({ error: error.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await User.findOne({ email });
    if (!findUser) {
      return res.json({ message: "User does not exist" });
    } else {
      const isMatch = await decryptPassword({
        password,
        hashedPassword: findUser.password,
      });
      if (isMatch) {
        const token = createToken({ findUser });
        return res.cookie("userToken", token).json({
          message: "User logged in successfully",
        });
      } else {
        return res.json({ message: "Invalid password" });
      }
    }
  } catch (error) {
    return res.json({ error: error.message });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const { userToken } = await req.cookies;
    const userData = await compareToken({ token: userToken });
    if (!userData) {
      return res.json({
        message: "Error getting user profile",
      });
    } else {
      return res.json({
        message: "User profile fetched successfully",
        user: userData,
      });
    }
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
};
