require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./routes/index");

const mongoose = require("mongoose");

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use("/", router);

// mongooseDB Connection
// Look option from https://arunrajeevan.medium.com/understanding-mongoose-connection-options-2b6e73d96de1
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`successfully connected`);
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
