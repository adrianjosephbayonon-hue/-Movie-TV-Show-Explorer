import axios from "axios";

const API_URL = "http://localhost:5000/api";

export async function getTrendingMovies() {
  const response = await axios.get(`${API_URL}/trending`);
  return response.data;
}

export async function getPopularMovies() {
  const response = await axios.get(`${API_URL}/popular`);
  return response.data;
}

export async function getPopularTVShows() {
  const response = await axios.get(`${API_URL}/tv/popular`);
  return response.data;
}

export async function searchMovies(query, page = 1) {
  const response = await axios.get(`${API_URL}/search`, {
    params: {
      query,
      page,
    },
  });

  return response.data;
}

export async function getMovieDetails(id) {
  const response = await axios.get(`${API_URL}/movie/${id}`);
  return response.data;
}

export async function getTVDetails(id) {
  const response = await axios.get(`${API_URL}/tv/${id}`);
  return response.data;
}