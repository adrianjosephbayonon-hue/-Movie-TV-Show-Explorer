require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const movieRoutes = require("./routes/movies");
const errorHandler = require("./middleware/errorHandler");

const app = express();

const PORT = process.env.PORT || 5000;
const CLIENT_URL =
  process.env.CLIENT_URL || "http://localhost:5173";

const isProduction =
  process.env.NODE_ENV === "production";

if (!process.env.TMDB_API_KEY) {
  console.error("ERROR: TMDB_API_KEY is missing.");
  process.exit(1);
}

if (!process.env.TMDB_BASE_URL) {
  console.error("ERROR: TMDB_BASE_URL is missing.");
  process.exit(1);
}

if (isProduction) {
  app.set("trust proxy", 1);
}

app.disable("x-powered-by");

app.use(helmet());

app.use(
  cors({
    origin: CLIENT_URL,
    methods: ["GET"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(
  express.json({
    limit: "10kb",
  })
);

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    message:
      "Too many requests. Please try again later.",
  },
});

app.use("/api", apiLimiter);

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

app.listen(PORT, "0.0.0.0", () => {
  console.log(
    `CineVault API running on port ${PORT}`
  );
});