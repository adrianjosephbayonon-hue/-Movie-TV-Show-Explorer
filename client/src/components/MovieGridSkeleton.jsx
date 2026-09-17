import MovieCardSkeleton from "./MovieCardSkeleton";

function MovieGridSkeleton({ count = 12 }) {
  return (
    <div
      className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
      aria-label="Loading titles"
    >
      {Array.from({ length: count }, (_, index) => (
        <MovieCardSkeleton key={index} />
      ))}
    </div>
  );
}

export default MovieGridSkeleton;