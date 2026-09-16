import { useEffect, useState } from "react";
import {
  ArrowLeft,
  CalendarDays,
  Heart,
  Star,
  Tv,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

import { getTVDetails } from "../../api/movies";
import TrailerEmbed from "../../components/TrailerEmbed";
import {
  addToWatchlist,
  isInWatchlist,
  removeFromWatchlist,
} from "../../utils/watchlist";
import {
  getBackdropUrl,
  getPosterUrl,
} from "../../utils/tmdb";

function TVDetails() {
  const { id } = useParams();

  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadTVShow() {
      try {
        setLoading(true);
        setError("");

        const data = await getTVDetails(id);

        if (!cancelled) {
          setShow(data);
          setSaved(isInWatchlist(data.id, "tv"));
        }
      } catch (err) {
        console.error("Failed to load TV show details:", err);

        if (!cancelled) {
          setError(
            "We couldn't load this TV show right now. Please try again."
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadTVShow();

    return () => {
      cancelled = true;
    };
  }, [id]);

  function handleWatchlistClick() {
    if (!show) {
      return;
    }

    if (saved) {
      removeFromWatchlist(show.id, "tv");
      setSaved(false);
    } else {
      addToWatchlist({
        ...show,
        media_type: "tv",
      });

      setSaved(true);
    }
  }

  if (loading) {
    return (
      <main className="flex min-h-[calc(100vh-64px)] items-center justify-center px-5">
        <div
          className="flex items-center gap-3 text-slate-300"
          role="status"
          aria-label="Loading TV show details"
        >
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-[#6c63ff] border-t-transparent" />

          <span>Loading TV show details...</span>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <Link
          to="/tv"
          className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
        >
          <ArrowLeft size={17} aria-hidden="true" />
          Back to TV Shows
        </Link>

        <div
          className="rounded-xl border border-[#e85d75]/30 bg-[#e85d75]/10 p-6"
          role="alert"
        >
          <h1 className="text-xl font-bold text-white">
            Unable to load TV show
          </h1>

          <p className="mt-2 text-slate-300">
            {error}
          </p>
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
    show.last_air_date?.slice(0, 4) || null;

  const rating = show.vote_average
    ? show.vote_average.toFixed(1)
    : "N/A";

  const seasonsCount = show.number_of_seasons || 0;
  const episodesCount = show.number_of_episodes || 0;

  const trailer =
    show.videos?.results?.find(
      (video) =>
        video.site === "YouTube" &&
        video.type === "Trailer" &&
        video.official
    ) ||
    show.videos?.results?.find(
      (video) =>
        video.site === "YouTube" &&
        video.type === "Trailer"
    );

  const cast = show.credits?.cast?.slice(0, 8) || [];

  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden">
        {backdropUrl && (
          <div className="absolute inset-0">
            <img
              src={backdropUrl}
              alt=""
              className="h-full w-full object-cover opacity-20"
            />

            <div className="absolute inset-0 bg-[#0b1020]/80" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1020] via-[#0b1020]/60 to-[#0b1020]/30" />
          </div>
        )}

        <div className="relative mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-16">
          <Link
            to="/tv"
            className="mb-10 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
          >
            <ArrowLeft size={17} aria-hidden="true" />
            Back to TV Shows
          </Link>

          <div className="grid gap-8 md:grid-cols-[260px_1fr] lg:grid-cols-[300px_1fr]">
            <div>
              <div className="overflow-hidden rounded-2xl bg-[#121a2b] shadow-2xl">
                {posterUrl ? (
                  <img
                    src={posterUrl}
                    alt={`${show.name} poster`}
                    className="w-full"
                  />
                ) : (
                  <div className="flex aspect-[2/3] items-center justify-center text-slate-500">
                    No poster available
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#00b8a9]">
                <Tv
                  size={16}
                  aria-hidden="true"
                />
                TV Show
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                {show.name}
              </h1>

              {show.tagline && (
                <p className="mt-4 text-lg italic text-slate-400">
                  "{show.tagline}"
                </p>
              )}

              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-300">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays
                    size={16}
                    aria-hidden="true"
                  />

                  {firstAirYear}

                  {lastAirYear &&
                    lastAirYear !== firstAirYear &&
                    ` – ${lastAirYear}`}
                </span>

                <span>
                  {seasonsCount} season
                  {seasonsCount !== 1 ? "s" : ""}
                </span>

                <span>
                  {episodesCount} episode
                  {episodesCount !== 1 ? "s" : ""}
                </span>

                <span className="inline-flex items-center gap-1.5">
                  <Star
                    size={16}
                    fill="currentColor"
                    className="text-[#00b8a9]"
                    aria-hidden="true"
                  />

                  {rating}
                </span>
              </div>

              {show.genres?.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {show.genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              )}

              <p className="mt-7 max-w-3xl text-base leading-7 text-slate-300">
                {show.overview ||
                  "No overview is available for this title."}
              </p>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={handleWatchlistClick}
                  aria-label={
                    saved
                      ? `Remove ${show.name} from My List`
                      : `Add ${show.name} to My List`
                  }
                  aria-pressed={saved}
                  className={`inline-flex items-center gap-2 rounded-lg px-5 py-3 font-semibold transition ${
                    saved
                      ? "bg-[#6c63ff] text-white hover:bg-[#5b52e6]"
                      : "bg-white/10 text-white hover:bg-white/15"
                  }`}
                >
                  <Heart
                    size={18}
                    fill={saved ? "currentColor" : "none"}
                    aria-hidden="true"
                  />

                  {saved
                    ? "Remove from My List"
                    : "Add to My List"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {trailer && (
        <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
          <div className="mb-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00b8a9]">
              Watch
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white">
              Official Trailer
            </h2>
          </div>

          <TrailerEmbed
            videoKey={trailer.key}
            title={show.name}
          />
        </section>
      )}

      {cast.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
          <div className="mb-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00b8a9]">
              Cast
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white">
              Top Cast
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
            {cast.map((person) => {
              const profileUrl = getPosterUrl(
                person.profile_path,
                "w185"
              );

              return (
                <article
                  key={person.credit_id || person.id}
                  className="overflow-hidden rounded-xl bg-[#121a2b]"
                >
                  <div className="aspect-[2/3] bg-[#1b263b]">
                    {profileUrl ? (
                      <img
                        src={profileUrl}
                        alt={`${person.name} profile`}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center p-3 text-center text-xs text-slate-500">
                        No photo
                      </div>
                    )}
                  </div>

                  <div className="p-3">
                    <h3 className="truncate text-sm font-semibold text-white">
                      {person.name}
                    </h3>

                    <p className="mt-1 truncate text-xs text-slate-500">
                      {person.character || "Unknown role"}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
}

export default TVDetails;