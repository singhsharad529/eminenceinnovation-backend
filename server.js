const express = require("express");
const app = express();

const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

// Middlewares to handle error
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

// added environment variables for server use
dotenv.config();

// executing db connection module
connectDB();

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.get("/", (req, res) => {
  // testing end point : To check server is  running properly or not
  res.send("Backend Server for product app");
});
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

//middlewares for error handling
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 6000;
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
