const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    default: `${"user : " + Math.random(Date.now() * 100)}`,
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
  phone: {
    type: Number,
    required: [true, "Please Enter Number"],
  },
  role: {
    type: String,
    enum: ["Customer", "Developer", "Seller"],
    default: "Customer",
  },
  avatar: {
    default:
      "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
    type: String,
  },
  address: [
    {
      shipping_address: {
        default: {},
        type: String,
      },
      billing_address: {
        default: {},
        type: String,
      },
    },
  ],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
