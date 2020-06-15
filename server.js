const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");
const app = express();
const transactions = require("./routes/transactions");

dotenv.config({ path: "./config/config.env" });
connectDB();
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use("/api/v1/transactions", transactions);
app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Listening to ${PORT} in mode ${process.env.NODE_ENV}`)
);
