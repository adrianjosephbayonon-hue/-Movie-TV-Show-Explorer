import { useEffect, useState } from "react";
import { ArrowLeft, Heart, Star } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import { getTVDetails } from "../../api/movies";
import { getBackdropUrl, getPosterUrl } from "../../utils/tmdb";

function TVDetails() {
  const { id } = useParams();

  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    getTVDetails(id)
      .then((data) => {
        if (!cancelled) {
          setShow(data);
        }
      })
      .catch((error) => {
        if (!cancelled) {
          console.error(
            "Failed to load TV show details:",
            error
          );

          setError(
            "We couldn't load this TV show right now. Please try again."
          );
        }
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [id]);

  if (loading) {
    return (
      <main className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <p className="text-center text-slate-400">
          Loading TV show details...
        </p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div
          className="rounded-xl border border-[#E85D75]/30 bg-[#E85D75]/10 p-6 text-center"
          role="alert"
        >
          <p className="text-[#ff9aaa]">
            {error}
          </p>

          <Link
            to="/tv"
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#6c63ff] px-4 py-2 font-semibold text-white transition hover:bg-[#5b52e6]"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            Back to TV Shows
          </Link>
        </div>
      </main>
    );
  }

  if (!show) {
    return null;
  }

  const posterUrl = getPosterUrl(show.poster_path);
  const backdropUrl = getBackdropUrl(show.backdrop_path);

  const firstAirYear =
    show.first_air_date?.slice(0, 4) || "N/A";

  const lastAirYear =
    show.last_air_date?.slice(0, 4) || "";

  const year =
    firstAirYear !== "N/A" && lastAirYear
      ? `${firstAirYear}–${lastAirYear}`
      : firstAirYear;

  const seasons = show.number_of_seasons || 0;
  const episodes = show.number_of_episodes || 0;

  return (
    <main>
      <section className="relative overflow-hidden">
        {backdropUrl && (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url(${backdropUrl})`,
            }}
          />
        )}

        <div className="absolute inset-0 bg-[#0b1020]/80" />

        <div className="relative mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
          <Link
            to="/tv"
            className="mb-8 inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            Back to TV Shows
          </Link>

          <div className="grid gap-8 md:grid-cols-[280px_1fr]">
            <div className="overflow-hidden rounded-xl bg-[#121a2b]">
              {posterUrl ? (
                <img
                  src={posterUrl}
                  alt={`${show.name} poster`}
                  className="w-full"
                />
              ) : (
                <div className="flex aspect-[2/3] items-center justify-center p-5 text-center text-slate-500">
                  No poster available
                </div>
              )}
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00b8a9]">
                TV Show
              </p>

              <h1 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">
                {show.name}
              </h1>

              {show.tagline && (
                <p className="mt-3 text-lg italic text-slate-400">
                  "{show.tagline}"
                </p>
              )}

              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-slate-300">
                <span>{year}</span>

                <span>•</span>

                <span>
                  {seasons}{" "}
                  {seasons === 1 ? "Season" : "Seasons"}
                </span>

                <span>•</span>

                <span>
                  {episodes}{" "}
                  {episodes === 1 ? "Episode" : "Episodes"}
                </span>

                {show.vote_average > 0 && (
                  <>
                    <span>•</span>

                    <span className="flex items-center gap-1">
                      <Star
                        size={16}
                        fill="currentColor"
                        className="text-yellow-400"
                        aria-hidden="true"
                      />

                      {show.vote_average.toFixed(1)}
                    </span>
                  </>
                )}
              </div>

              {show.genres?.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {show.genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-300"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              )}

              <p className="mt-7 max-w-3xl leading-7 text-slate-300">
                {show.overview ||
                  "No description available."}
              </p>

              <button
                type="button"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-lg bg-[#6c63ff] px-5 py-3 font-semibold text-white transition hover:bg-[#5b52e6]"
              >
                <Heart size={18} aria-hidden="true" />
                Add to My List
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TVDetails;