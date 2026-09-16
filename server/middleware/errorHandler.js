function errorHandler(error, req, res, next) {
  console.error("========== API ERROR ==========");
  console.error("Message:", error.message);

  if (error.response) {
    console.error("TMDB Status:", error.response.status);
    console.error("TMDB Data:", error.response.data);
  }

  console.error("===============================");

  res.status(500).json({
    message: "The movie service is temporarily unavailable.",
  });
}

module.exports = errorHandler;