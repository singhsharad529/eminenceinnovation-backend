const express = require("express");
const dotenv = require("dotenv");
const app = express();
const notes = require("./data/notes");
const noteRoutes = require("./routes/noteRoutes");

const mongoose = require("mongoose");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const path = require("path");

dotenv.config();
connectDB();

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);

app.get("/", (req, res) => {
  res.send("Backend Server for mynotes app");
});

//---------------------deployment---------------
__dirname = path.resolve();
if (process.env.NODE_ENV == "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 6000;
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
