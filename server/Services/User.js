const CatchAsyncError = require("../Middlewares/Exception_Handling");
const { encryptPassword, decryptPassword } = require("../Middlewares/Security");
const { createToken, compareToken } = require("../Middlewares/Token");
const User = require("../Models/User");

exports.createAccount = CatchAsyncError(async (req, res) => {
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
});

exports.loginUser = CatchAsyncError(async (req, res) => {
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
});

exports.getProfile = CatchAsyncError(async (req, res) => {
  const { userToken } = await req.cookies;
  const userData = await compareToken({ token: userToken });
  if (!userToken) {
    return res.json({
      message: "Error getting user profile",
    });
  } else {
    return res.json({
      message: "User profile fetched successfully",
      user: userData,
    });
  }
});

exports.updatePassword = CatchAsyncError(async (req, res) => {
  const { userToken } = await req.cookies;
  const { oldPassword, newPassword } = req.body;
  const findUser = await compareToken({ token: userToken });
  if (!findUser) {
    return res.json({
      message: "Please Login First!",
    });
  } else {
    const comparedPass = await decryptPassword({
      password: oldPassword,
      hashedPassword: findUser.password,
    });
    if (comparedPass == true) {
      const encryptedPass = await encryptPassword({ password: newPassword });
      const Updated = await User.findByIdAndUpdate(findUser._id, {
        password: encryptedPass,
      });
      Updated.save();
      return res.json({
        message: "Password Updated SuccessFully!",
      });
    } else {
      return res.json({
        message: "Old Password Is Incorrect!",
      });
    }
  }
});

exports.updateProfile = CatchAsyncError(async (req, res) => {
  const { userToken } = await req.cookies;
  const findUser = compareToken({ token });
  if (!userToken) {
    return res.json({
      message: "Please Login Fisrt!",
    });
  } else {
    const id = findUser._id;
    const Updated = await User.findByIdAndUpdate(id, { ...req.body });
    Updated.save();
  }
});
