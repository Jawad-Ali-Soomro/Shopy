const connectDatabase = ({ conString }) => {
  const mongoose = require("mongoose");
  mongoose
    .connect(conString)
    .then(console.log(`Connetion Established!`.red))
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDatabase;
