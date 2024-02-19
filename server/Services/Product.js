const CatchAsyncError = require("../Middlewares/Exception_Handling");
const { compareToken } = require("../Middlewares/Token");
const Product = require("../Models/Product");

exports.createProduct = CatchAsyncError(async (req, res) => {
  const { userToken } = req.cookies;
  const findUser = await compareToken({ token: userToken });
  if (!findUser) {
    return res.json({
      message: "Please Login First!",
    });
  } else {
    const userRole = findUser.role;
    if (userRole == "Customer") {
      return res.json({
        message: "You Are Unauthorized To Create A Product!",
      });
    } else {
      await Product.create({ ...req.body, creator: findUser._id });
      return res.json({
        message: "Product Created Successfully!",
      });
    }
  }
});

exports.getAllProducts = CatchAsyncError(async (req, res) => {
  const foundProducts = await Product.find({});
  return res.json({
    foundProducts,
  });
});

exports.getSingleProduct = CatchAsyncError(async (req, res) => {
  const { id } = req.params;
  const foundProduct = await Product.findOne({ _id: id });
  return res.json({
    foundProduct,
  });
});

exports.getProductByCategory = CatchAsyncError(async (req, res) => {
  const { mainCat } = req.body;
  const foundProduct = await Product.find({ productCategory: mainCat });
  return res.json({
    foundProduct,
  });
});
