import { Heart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import {
  addToWatchlist,
  isInWatchlist,
  removeFromWatchlist,
} from "../utils/watchlist";
import { getPosterUrl } from "../utils/tmdb";

function MovieCard({ movie }) {
  const title = movie.title || movie.name || "Untitled";

  const year =
    movie.release_date?.slice(0, 4) ||
    movie.first_air_date?.slice(0, 4) ||
    "N/A";

  const mediaType =
    movie.media_type ||
    (movie.first_air_date ? "tv" : "movie");

  const detailsPath =
    mediaType === "tv"
      ? `/tv/${movie.id}`
      : `/movie/${movie.id}`;

  const posterUrl = getPosterUrl(movie.poster_path);

  const [saved, setSaved] = useState(() =>
    isInWatchlist(movie.id, mediaType)
  );

  function handleWatchlistClick(event) {
    event.preventDefault();
    event.stopPropagation();

    if (saved) {
      removeFromWatchlist(movie.id, mediaType);
      setSaved(false);
    } else {
      addToWatchlist({
        ...movie,
        media_type: mediaType,
      });

      setSaved(true);
    }
  }

  return (
    <article className="group relative min-w-[150px] sm:min-w-[180px]">
      <Link
        to={detailsPath}
        className="block overflow-hidden rounded-xl bg-[#121a2b]"
        aria-label={`View details for ${title}`}
      >
        <div className="aspect-[2/3] overflow-hidden bg-[#1b263b]">
          {posterUrl ? (
            <img
              src={posterUrl}
              alt={`${title} poster`}
              loading="lazy"
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center p-4 text-center text-sm text-slate-500">
              No poster available
            </div>
          )}
        </div>

        <div className="p-3">
          <h3 className="truncate font-semibold text-white">
            {title}
          </h3>

          <p className="mt-1 text-sm text-slate-400">
            {year}
          </p>
        </div>
      </Link>

      <button
        type="button"
        onClick={handleWatchlistClick}
        aria-label={
          saved
            ? `Remove ${title} from My List`
            : `Add ${title} to My List`
        }
        aria-pressed={saved}
        className={`absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-sm transition focus-visible:opacity-100 ${
          saved
            ? "bg-[#6c63ff] text-white opacity-100"
            : "bg-[#0b1020]/80 text-white opacity-0 group-hover:opacity-100 hover:bg-[#6c63ff]"
        }`}
      >
        <Heart
          size={17}
          fill={saved ? "currentColor" : "none"}
          aria-hidden="true"
        />
      </button>
    </article>
  );
}

export default MovieCard;