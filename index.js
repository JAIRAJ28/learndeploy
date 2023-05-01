const mongoose = require("mongoose");
const express = require("express");
const { userConnect } = require("./connect/db");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const user = require("./controller/control");
const { notes } = require("./controller/notessControl");
const { authall } = require("./middleware/middleware");
const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", user);
app.use(authall);
app.use("/notes", notes);

app.listen(8000, async () => {
  try {
    await userConnect;
    console.log("userConnected");
  } catch (error) {
    console.log("error");
  }
});
