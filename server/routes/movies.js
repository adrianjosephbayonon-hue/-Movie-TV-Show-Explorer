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

    const page = Number(req.query.page) || 1;

    const data = await searchMulti(query, page);

    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/movie/:id", async (req, res, next) => {
  try {
    const data = await getMovieDetails(req.params.id);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/tv/:id", async (req, res, next) => {
  try {
    const data = await getTVDetails(req.params.id);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;