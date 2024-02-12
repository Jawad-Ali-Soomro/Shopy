const bcrypt = require("bcryptjs");
exports.encryptPassword = async ({ password }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
};

exports.decryptPassword = async ({ password, hashedPassword }) => {
  return await bcrypt.compare(password, hashedPassword);
};
