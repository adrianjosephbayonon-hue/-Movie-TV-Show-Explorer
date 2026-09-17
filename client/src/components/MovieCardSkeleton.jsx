function MovieCardSkeleton() {
  return (
    <div
      className="min-w-[150px] animate-pulse sm:min-w-[180px]"
      aria-hidden="true"
    >
      <div className="aspect-[2/3] rounded-xl bg-[#1b263b]" />

      <div className="mt-3 h-4 w-3/4 rounded bg-[#1b263b]" />

      <div className="mt-2 h-3 w-1/3 rounded bg-[#1b263b]" />
    </div>
  );
}

export default MovieCardSkeleton;