const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const App = express();
const PORT = 3000 || process.env.PORT;

App.use(cors);
App.use(express.json);

const URI = process.env.URI;
mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connection to mongo has been established");
});

const exerciseRoutes = require("./routes/exercise");
const userRoutes = require("./routes/user");

App.use("/exercises", exerciseRoutes);
App.use("/users", userRoutes);

App.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
