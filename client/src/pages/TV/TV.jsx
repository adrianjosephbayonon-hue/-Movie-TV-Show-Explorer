import { useEffect, useState } from "react";
import { AlertCircle, Loader2 } from "lucide-react";

import MovieCard from "../../components/MovieCard";
import { getPopularTVShows } from "../../api/movies";

function TV() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadTVShows() {
      try {
        setLoading(true);
        setError("");

        const data = await getPopularTVShows();

        if (!cancelled) {
          setShows(data.results || []);
        }
      } catch (err) {
        console.error("Failed to load TV shows:", err);

        if (!cancelled) {
          setError(
            "We couldn't load the TV shows right now. Please try again."
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadTVShows();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-5 py-10 lg:px-8">
      <header className="mb-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#00b8a9]">
          Browse
        </p>

        <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
          Popular TV Shows
        </h1>

        <p className="mt-3 max-w-2xl text-slate-400">
          Explore popular TV shows and discover your next series
          to watch.
        </p>
      </header>

      {loading && (
        <div
          className="flex min-h-[300px] items-center justify-center"
          role="status"
          aria-label="Loading TV shows"
        >
          <div className="flex items-center gap-3 text-slate-300">
            <Loader2
              size={24}
              className="animate-spin text-[#6c63ff]"
              aria-hidden="true"
            />

            <span>Loading TV shows...</span>
          </div>
        </div>
      )}

      {!loading && error && (
        <div
          className="rounded-xl border border-[#e85d75]/30 bg-[#e85d75]/10 p-5"
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
                Unable to load TV shows
              </h2>

              <p className="mt-1 text-sm text-slate-300">
                {error}
              </p>
            </div>
          </div>
        </div>
      )}

      {!loading && !error && shows.length === 0 && (
        <div className="rounded-xl bg-[#121a2b] p-8 text-center">
          <p className="text-slate-400">
            No TV shows are available right now.
          </p>
        </div>
      )}

      {!loading && !error && shows.length > 0 && (
        <section aria-labelledby="popular-tv-heading">
          <h2
            id="popular-tv-heading"
            className="sr-only"
          >
            Popular TV Shows
          </h2>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {shows.map((show) => (
              <MovieCard
                key={show.id}
                movie={{
                  ...show,
                  media_type: "tv",
                }}
              />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

export default TV;