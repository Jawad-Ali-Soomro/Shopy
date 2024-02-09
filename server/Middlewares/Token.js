const jwt = require("jsonwebtoken");
exports.createToken = ({ findUser }) => {
  const userObject = findUser.toObject();
  return (token = jwt.sign(userObject, process.env.JWT_SECRET));
};

exports.compareToken = async ({ token }) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (error) {
    return false;
  }
};
