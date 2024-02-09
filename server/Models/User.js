const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Please Enter Email Address"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Password"],
  },
  phone: [
    {
      country_code: Number,
      number: Number,
    },
  ],
  role: {
    type: String,
    enum: ["Customer", "Developer", "Seller"],
    default: "Customer",
  },
  avatar: {
    default: "none",
    type: String,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
