require("dotenv").config();

const express = require("express");
const cors = require("cors");

const movieRoutes = require("./routes/movies");
const errorHandler = require("./middleware/errorHandler");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "CineVault API is running.",
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
  });
});

app.use("/api", movieRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`CineVault API running on http://localhost:${PORT}`);
});