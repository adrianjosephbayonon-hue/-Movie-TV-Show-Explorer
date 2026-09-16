const axios = require("axios");

const tmdbClient = axios.create({
  baseURL: process.env.TMDB_BASE_URL,
  params: {
    api_key: process.env.TMDB_API_KEY,
    language: "en-US",
  },
});

async function getTrendingMovies() {
  const response = await tmdbClient.get("/trending/movie/week");

  return response.data;
}

async function getPopularMovies() {
  const response = await tmdbClient.get("/movie/popular");

  return response.data;
}

async function getPopularTVShows() {
  const response = await tmdbClient.get("/tv/popular");

  return response.data;
}

async function searchMulti(query, page = 1) {
  const response = await tmdbClient.get("/search/multi", {
    params: {
      query,
      page,
      include_adult: false,
    },
  });

  return response.data;
}

async function getMovieDetails(movieId) {
  const response = await tmdbClient.get(`/movie/${movieId}`, {
    params: {
      append_to_response: "credits,videos",
    },
  });

  return response.data;
}

async function getTVDetails(tvId) {
  const response = await tmdbClient.get(`/tv/${tvId}`, {
    params: {
      append_to_response: "credits,videos",
    },
  });

  return response.data;
}

module.exports = {
  getTrendingMovies,
  getPopularMovies,
  getPopularTVShows,
  searchMulti,
  getMovieDetails,
  getTVDetails,
};