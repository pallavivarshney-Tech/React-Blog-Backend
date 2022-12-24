const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/blogRoute");
const PORT = process.env.PORT || 8080;
const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/api/blog", router);
app.get("/", (req, res) => {
  res.send("Connected");
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, (req, res) => {
      console.log(`server is working in ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
