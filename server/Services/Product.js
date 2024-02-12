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
