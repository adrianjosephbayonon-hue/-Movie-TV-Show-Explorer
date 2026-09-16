import { useEffect, useState } from "react";
import { AlertCircle, Loader2 } from "lucide-react";

import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";
import {
  getPopularMovies,
  getPopularTVShows,
  getTrendingMovies,
} from "../api/movies";

function Home() {
  const [trending, setTrending] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularTV, setPopularTV] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadHomeData() {
      try {
        setLoading(true);
        setError("");

        const results = await Promise.allSettled([
          getTrendingMovies(),
          getPopularMovies(),
          getPopularTVShows(),
        ]);

        if (cancelled) {
          return;
        }

        const [
          trendingResult,
          popularMoviesResult,
          popularTVResult,
        ] = results;

        if (trendingResult.status === "fulfilled") {
          setTrending(trendingResult.value.results || []);
        }

        if (popularMoviesResult.status === "fulfilled") {
          setPopularMovies(
            popularMoviesResult.value.results || []
          );
        }

        if (popularTVResult.status === "fulfilled") {
          setPopularTV(
            popularTVResult.value.results || []
          );
        }

        const failedRequests = results.filter(
          (result) => result.status === "rejected"
        );

        if (failedRequests.length === results.length) {
          setError(
            "We couldn't load the discovery content right now. Please try again."
          );
        }
      } catch (err) {
        console.error("Failed to load Home data:", err);

        if (!cancelled) {
          setError(
            "We couldn't load the discovery content right now. Please try again."
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadHomeData();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />

      <section
        className="mx-auto max-w-7xl px-5 pb-12 lg:px-8"
        aria-label="Movie and TV show discovery"
      >
        {loading && (
          <div
            className="flex min-h-[250px] items-center justify-center"
            role="status"
            aria-label="Loading discovery content"
          >
            <div className="flex items-center gap-3 text-slate-300">
              <Loader2
                size={24}
                className="animate-spin text-[#6c63ff]"
                aria-hidden="true"
              />

              <span>Loading discovery content...</span>
            </div>
          </div>
        )}

        {!loading && error && (
          <div
            className="mb-8 rounded-xl border border-[#e85d75]/30 bg-[#e85d75]/10 p-5"
            role="alert"
          >
            <div className="flex items-start gap-3">
              <AlertCircle
                size={22}
                className="mt-0.5 shrink-0 text-[#e85d75]"
                aria-hidden="true"
              />

              <div>
                <h2 className="font-semibold text-white">
                  Discovery content unavailable
                </h2>

                <p className="mt-1 text-sm text-slate-300">
                  {error}
                </p>
              </div>
            </div>
          </div>
        )}

        {!loading && trending.length > 0 && (
          <MovieRow
            title="Trending This Week"
            movies={trending}
          />
        )}

        {!loading && popularMovies.length > 0 && (
          <MovieRow
            title="Popular Movies"
            movies={popularMovies.map((movie) => ({
              ...movie,
              media_type: "movie",
            }))}
          />
        )}

        {!loading && popularTV.length > 0 && (
          <MovieRow
            title="Popular TV Shows"
            movies={popularTV.map((show) => ({
              ...show,
              media_type: "tv",
            }))}
          />
        )}

        {!loading &&
          !error &&
          trending.length === 0 &&
          popularMovies.length === 0 &&
          popularTV.length === 0 && (
            <div className="rounded-xl border border-white/5 bg-[#121a2b] p-10 text-center">
              <h2 className="text-xl font-bold text-white">
                Nothing to show right now
              </h2>

              <p className="mx-auto mt-2 max-w-md text-slate-400">
                CineVault couldn't find any discovery content
                at the moment. Please try again later.
              </p>
            </div>
          )}
      </section>
    </main>
  );
}

export default Home;