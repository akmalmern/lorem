const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dataDB = require("./db/db");
// *****
dataDB();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`${port}-portda ishladi`);
});
