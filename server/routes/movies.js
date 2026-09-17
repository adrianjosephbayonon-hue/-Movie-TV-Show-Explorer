const express = require("express");

const {
  getTrendingMovies,
  getPopularMovies,
  getPopularTVShows,
  searchMulti,
  getMovieDetails,
  getTVDetails,
} = require("../services/tmdbService");

const router = express.Router();

function validateId(id) {
  return /^\d+$/.test(id) && Number(id) > 0;
}

function validatePage(page) {
  return (
    Number.isInteger(page) &&
    page >= 1 &&
    page <= 500
  );
}

router.get("/trending", async (req, res, next) => {
  try {
    const data = await getTrendingMovies();

    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/popular", async (req, res, next) => {
  try {
    const data = await getPopularMovies();

    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/tv/popular", async (req, res, next) => {
  try {
    const data = await getPopularTVShows();

    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/search", async (req, res, next) => {
  try {
    const query = req.query.query?.trim();

    if (!query) {
      return res.status(400).json({
        message: "Search query is required.",
      });
    }

    if (query.length < 2) {
      return res.status(400).json({
        message: "Search query must contain at least 2 characters.",
      });
    }

    if (query.length > 100) {
      return res.status(400).json({
        message: "Search query is too long.",
      });
    }

    const page = Number(req.query.page) || 1;

    if (!validatePage(page)) {
      return res.status(400).json({
        message: "Page must be an integer between 1 and 500.",
      });
    }

    const data = await searchMulti(query, page);

    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/movie/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!validateId(id)) {
      return res.status(400).json({
        message: "Movie ID must be a positive number.",
      });
    }

    const data = await getMovieDetails(id);

    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/tv/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!validateId(id)) {
      return res.status(400).json({
        message: "TV show ID must be a positive number.",
      });
    }

    const data = await getTVDetails(id);

    res.json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;