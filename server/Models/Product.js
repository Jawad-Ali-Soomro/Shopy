const { default: mongoose } = require("mongoose");

const productShema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, "Enter Product Name"],
  },
  productDescription: {
    type: String,
    required: [true, "Please Enter Product Description"],
  },
  productCategory: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, "Please Enter Price"],
  },
  image: {
    type: String,
    required: [true, "Please Upload Image"],
  },
  quantity: {
    type: Number,
    required: [true, "Please Enter Quantity"],
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  review: [
    {
      default: [],
      stars: {
        type: Number,
        max: 5,
        required: [true, "Please Rate"],
      },
      comment: {
        type: String,
        required: [true, "Please Enter Comment"],
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },
  ],
});

const Product = mongoose.model("Product", productShema);
module.exports = Product;
