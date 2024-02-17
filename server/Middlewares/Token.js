const jwt = require("jsonwebtoken");
exports.createToken = ({ findUser }) => {
  const userObject = findUser.toObject();
  return (token = jwt.sign(userObject, process.env.JWT_SECRET));
};

exports.compareToken = async ({ token }) => {
  try {
    return (decoded = jwt.verify(token, process.env.JWT_SECRET));
  } catch (error) {
    return false;
  }
};
