import { useEffect, useState } from "react";

import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";
import {
  getPopularMovies,
  getPopularTVShows,
  getTrendingMovies,
} from "../api/movies";

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularTVShows, setPopularTVShows] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadHomeData() {
    setLoading(true);
    setError("");

    const [
      trendingResult,
      popularMoviesResult,
      popularTVResult,
    ] = await Promise.allSettled([
      getTrendingMovies(),
      getPopularMovies(),
      getPopularTVShows(),
    ]);

    const failedSections = [];

    if (trendingResult.status === "fulfilled") {
      setTrendingMovies(
        trendingResult.value?.results || []
      );
    } else {
      console.error(
        "Trending request failed:",
        trendingResult.reason
      );

      failedSections.push("Trending");
    }

    if (popularMoviesResult.status === "fulfilled") {
      setPopularMovies(
        popularMoviesResult.value?.results || []
      );
    } else {
      console.error(
        "Popular movies request failed:",
        popularMoviesResult.reason
      );

      failedSections.push("Popular Movies");
    }

    if (popularTVResult.status === "fulfilled") {
      setPopularTVShows(
        popularTVResult.value?.results || []
      );
    } else {
      console.error(
        "Popular TV Shows request failed:",
        popularTVResult.reason
      );

      failedSections.push("Popular TV Shows");
    }

    if (failedSections.length > 0) {
      setError(
        `Some movie data could not be loaded: ${failedSections.join(
          ", "
        )}.`
      );
    }

    setLoading(false);
  }

  useEffect(() => {
    async function initializeHome() {
      await loadHomeData();
    }

    initializeHome();
  }, []);

  return (
    <>
      <Hero />

      <main className="mx-auto max-w-7xl px-5 pb-12 lg:px-8">
        {loading && (
          <div
            className="py-16 text-center text-slate-400"
            role="status"
          >
            Loading movies and TV shows...
          </div>
        )}

        {!loading && error && (
          <div
            className="my-8 rounded-xl border border-[#E85D75]/30 bg-[#E85D75]/10 p-5"
            role="alert"
          >
            <p className="text-[#ff9aaa]">
              {error}
            </p>

            <button
              type="button"
              onClick={loadHomeData}
              className="mt-4 rounded-lg bg-[#6c63ff] px-4 py-2 font-semibold text-white transition hover:bg-[#5b52e6]"
            >
              Try Again
            </button>
          </div>
        )}

        {!loading && (
          <>
            <MovieRow
              title="Trending Now"
              movies={trendingMovies}
            />

            <MovieRow
              title="Popular Movies"
              movies={popularMovies}
            />

            <MovieRow
              title="Popular TV Shows"
              movies={popularTVShows}
            />
          </>
        )}
      </main>
    </>
  );
}

export default Home;