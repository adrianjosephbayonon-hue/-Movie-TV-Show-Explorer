import { useEffect, useState } from "react";
import {
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  Search as SearchIcon,
} from "lucide-react";
import { useSearchParams } from "react-router-dom";

import { searchMovies } from "../../api/movies";
import MovieCard from "../../components/MovieCard";
import MovieGridSkeleton from "../../components/MovieGridSkeleton";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query")?.trim() || "";
  const pageFromUrl = Math.max(
    1,
    Number(searchParams.get("page")) || 1
  );

  const [input, setInput] = useState(query);
  const [results, setResults] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!query) {
      return undefined;
    }

    let cancelled = false;

    async function loadSearchResults() {
      try {
        setLoading(true);
        setError("");

        const data = await searchMovies(
          query,
          pageFromUrl
        );

        if (cancelled) {
          return;
        }

        const filteredResults = (data.results || []).filter(
          (item) =>
            item.media_type === "movie" ||
            item.media_type === "tv"
        );

        setResults(filteredResults);

        setTotalPages(
          Math.min(Number(data.total_pages) || 1, 500)
        );
      } catch (err) {
        console.error("Failed to search:", err);

        if (!cancelled) {
          setResults([]);
          setTotalPages(1);
          setError(
            "We couldn't complete your search right now. Please try again."
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadSearchResults();

    return () => {
      cancelled = true;
    };
  }, [query, pageFromUrl]);

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedInput = input.trim();

    if (!trimmedInput) {
      setSearchParams({});
      return;
    }

    setSearchParams({
      query: trimmedInput,
      page: "1",
    });
  }

  function handlePageChange(nextPage) {
    setSearchParams({
      query,
      page: String(nextPage),
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const showResults = query && results.length > 0;

  const showNoResults =
    query &&
    !loading &&
    !error &&
    results.length === 0;

  return (
    <main className="min-h-screen px-5 py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00b8a9]">
            Explore
          </p>

          <h1 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Search Movies & TV Shows
          </h1>

          <p className="mt-3 text-slate-400">
            Find movies and TV shows by title.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex max-w-3xl gap-3"
          role="search"
        >
          <div className="relative flex-1">
            <SearchIcon
              size={20}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              aria-hidden="true"
            />

            <label
              htmlFor="search-input"
              className="sr-only"
            >
              Search movies and TV shows
            </label>

            <input
              id="search-input"
              type="search"
              value={input}
              onChange={(event) =>
                setInput(event.target.value)
              }
              placeholder="Search for a movie or TV show..."
              maxLength={100}
              className="h-12 w-full rounded-lg border border-white/10 bg-[#121a2b] pl-12 pr-4 text-white placeholder:text-slate-600 focus:border-[#6c63ff] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-[#6c63ff] px-5 font-semibold text-white transition hover:bg-[#5b52e6]"
          >
            Search
          </button>
        </form>

        {query && (
          <div className="mt-10">
            <div className="mb-5">
              <h2 className="text-xl font-bold text-white">
                Results for "{query}"
              </h2>

              {!loading && !error && (
                <p className="mt-1 text-sm text-slate-500">
                  Page {pageFromUrl} of {totalPages}
                </p>
              )}
            </div>

            {loading && (
              <div
                role="status"
                aria-label="Searching"
              >
                <MovieGridSkeleton count={12} />
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
                      Search unavailable
                    </h2>

                    <p className="mt-1 text-sm text-slate-300">
                      {error}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {showNoResults && (
              <div className="rounded-xl border border-white/5 bg-[#121a2b] p-10 text-center">
                <h2 className="text-xl font-bold text-white">
                  No results found
                </h2>

                <p className="mx-auto mt-2 max-w-md text-slate-400">
                  Try another movie or TV show title.
                </p>
              </div>
            )}

            {showResults && (
              <>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                  {results.map((movie) => (
                    <MovieCard
                      key={`${movie.media_type}-${movie.id}`}
                      movie={movie}
                    />
                  ))}
                </div>

                {totalPages > 1 && (
                  <nav
                    className="mt-10 flex items-center justify-center gap-3"
                    aria-label="Search pagination"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        handlePageChange(
                          pageFromUrl - 1
                        )
                      }
                      disabled={pageFromUrl <= 1}
                      className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <ChevronLeft
                        size={17}
                        aria-hidden="true"
                      />
                      Previous
                    </button>

                    <span
                      className="min-w-24 text-center text-sm text-slate-400"
                      aria-live="polite"
                    >
                      Page {pageFromUrl} of{" "}
                      {totalPages}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        handlePageChange(
                          pageFromUrl + 1
                        )
                      }
                      disabled={
                        pageFromUrl >= totalPages
                      }
                      className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Next
                      <ChevronRight
                        size={17}
                        aria-hidden="true"
                      />
                    </button>
                  </nav>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

export default Search;