import MovieCardSkeleton from "./MovieCardSkeleton";

function MovieRowSkeleton() {
  return (
    <section
      className="py-8"
      aria-hidden="true"
    >
      <div className="mb-4">
        <div className="h-7 w-48 animate-pulse rounded bg-[#1b263b]" />
      </div>

      <div className="flex gap-4 overflow-hidden pb-3">
        {Array.from({ length: 6 }, (_, index) => (
          <MovieCardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
}

export default MovieRowSkeleton;