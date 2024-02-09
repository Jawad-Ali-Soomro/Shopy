const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const connectDatabase = require("./config/dbCon");
const userRoute = require("./Routes/User");
const cookieParser = require("cookie-parser");
require("colors");
dotenv.config({ path: "./config/.env" });
const conString = process.env.DB_URI;
connectDatabase({ conString });
app.listen(process.env.PORT || 8080, () => {
  console.log(`Port : ${process.env.PORT}`.red);
});
// Middlewares & Routes
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/api/v1", userRoute);
