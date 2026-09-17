function errorHandler(error, req, res, next) {
  console.error("========== API ERROR ==========");
  console.error("Message:", error.message);

  if (error.response) {
    console.error("TMDB Status:", error.response.status);
  }

  console.error("===============================");

  if (error.response) {
    const tmdbStatus = error.response.status;

    if (tmdbStatus === 404) {
      return res.status(404).json({
        message: "The requested movie or TV show was not found.",
      });
    }

    if (tmdbStatus === 429) {
      return res.status(503).json({
        message:
          "The movie service is temporarily busy. Please try again later.",
      });
    }

    if (tmdbStatus >= 400 && tmdbStatus < 500) {
      return res.status(400).json({
        message: "The request could not be processed.",
      });
    }
  }

  if (error.code === "ECONNABORTED") {
    return res.status(504).json({
      message: "The movie service took too long to respond.",
    });
  }

  return res.status(500).json({
    message: "The movie service is temporarily unavailable.",
  });
}

module.exports = errorHandler;