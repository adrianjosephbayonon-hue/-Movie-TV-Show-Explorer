import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <article className="group relative min-w-[150px] sm:min-w-[180px]">
      <Link
        to={`/movie/${movie.id}`}
        className="block overflow-hidden rounded-xl bg-[#121a2b]"
        aria-label={`View details for ${movie.title}`}
      >
        <div className="aspect-[2/3] overflow-hidden bg-[#1b263b]">
          <img
            src={movie.poster}
            alt={`${movie.title} poster`}
            loading="lazy"
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-3">
          <h3 className="truncate font-semibold text-white">
            {movie.title}
          </h3>

          <p className="mt-1 text-sm text-slate-400">
            {movie.year}
          </p>
        </div>
      </Link>

      <button
        type="button"
        aria-label={`Add ${movie.title} to My List`}
        className="absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-full bg-[#0b1020]/80 text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100 focus-visible:opacity-100 hover:bg-[#6c63ff]"
      >
        <Heart
          size={17}
          aria-hidden="true"
        />
      </button>
    </article>
  );
}

export default MovieCard;