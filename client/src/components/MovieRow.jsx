import MovieCard from "./MovieCard";

function MovieRow({ title, movies = [] }) {
  return (
    <section
      className="py-8"
      aria-labelledby={`${title}-heading`}
    >
      <div className="mb-4">
        <h2
          id={`${title}-heading`}
          className="text-xl font-bold text-white sm:text-2xl"
        >
          {title}
        </h2>
      </div>

      {movies.length > 0 ? (
        <div className="flex gap-4 overflow-x-auto pb-3">
          {movies.map((movie) => (
            <MovieCard
              key={`${movie.media_type || "movie"}-${movie.id}`}
              movie={movie}
            />
          ))}
        </div>
      ) : (
        <p className="text-slate-400">
          No titles available right now.
        </p>
      )}
    </section>
  );
}

export default MovieRow;