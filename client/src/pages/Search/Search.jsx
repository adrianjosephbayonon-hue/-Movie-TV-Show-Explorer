import { useEffect, useState } from "react";
import { AlertCircle, Loader2, Search as SearchIcon } from "lucide-react";
import { useSearchParams } from "react-router-dom";

import MovieCard from "../../components/MovieCard";
import { searchMovies } from "../../api/movies";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("query")?.trim() || "";

  const [query, setQuery] = useState(searchQuery);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    let cancelled = false;

    async function loadSearchResults() {
      try {
        setLoading(true);
        setError("");

        const data = await searchMovies(searchQuery);

        if (!cancelled) {
          const filteredResults = (data.results || []).filter(
            (item) =>
              item.media_type === "movie" ||
              item.media_type === "tv"
          );

          setResults(filteredResults);
        }
      } catch (err) {
        console.error("Search request failed:", err);

        if (!cancelled) {
          setResults([]);
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
  }, [searchQuery]);

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      setSearchParams({});
      return;
    }

    setSearchParams({
      query: trimmedQuery,
    });
  }

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-5 py-10 lg:px-8">
      <header className="mb-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#00b8a9]">
          Discover
        </p>

        <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
          Search
        </h1>

        <p className="mt-3 max-w-2xl text-slate-400">
          Search for movies and TV shows by title.
        </p>
      </header>

      <form
        onSubmit={handleSubmit}
        className="mb-10"
        role="search"
      >
        <label
          htmlFor="movie-search"
          className="sr-only"
        >
          Search movies and TV shows
        </label>

        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <SearchIcon
              size={20}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              aria-hidden="true"
            />

            <input
              id="movie-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search for a movie or TV show..."
              className="w-full rounded-lg border border-white/10 bg-[#121a2b] py-3 pl-12 pr-4 text-white placeholder:text-slate-500 focus:border-[#6c63ff] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-[#6c63ff] px-6 py-3 font-semibold text-white transition hover:bg-[#5b52e6]"
          >
            Search
          </button>
        </div>
      </form>

      {loading && (
        <div
          className="flex min-h-[250px] items-center justify-center"
          role="status"
          aria-label="Searching"
        >
          <div className="flex items-center gap-3 text-slate-300">
            <Loader2
              size={24}
              className="animate-spin text-[#6c63ff]"
              aria-hidden="true"
            />

            <span>Searching...</span>
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
                Search unavailable
              </h2>

              <p className="mt-1 text-sm text-slate-300">
                {error}
              </p>
            </div>
          </div>
        </div>
      )}

      {!loading &&
        !error &&
        searchQuery &&
        results.length === 0 && (
          <div className="rounded-xl bg-[#121a2b] p-8 text-center">
            <h2 className="text-lg font-semibold text-white">
              No results found
            </h2>

            <p className="mt-2 text-slate-400">
              Try searching for another movie or TV show.
            </p>
          </div>
        )}

      {!loading &&
        !error &&
        results.length > 0 && (
          <section aria-labelledby="search-results-heading">
            <div className="mb-5">
              <h2
                id="search-results-heading"
                className="text-xl font-bold text-white sm:text-2xl"
              >
                Results for "{searchQuery}"
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                {results.length} result
                {results.length !== 1 ? "s" : ""}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {results.map((item) => (
                <MovieCard
                  key={`${item.media_type}-${item.id}`}
                  movie={item}
                />
              ))}
            </div>
          </section>
        )}

      {!loading &&
        !error &&
        !searchQuery &&
        results.length === 0 && (
          <div className="rounded-xl border border-white/5 bg-[#121a2b] p-10 text-center">
            <SearchIcon
              size={40}
              className="mx-auto text-[#6c63ff]"
              aria-hidden="true"
            />

            <h2 className="mt-4 text-xl font-bold text-white">
              Find something to watch
            </h2>

            <p className="mx-auto mt-2 max-w-md text-slate-400">
              Enter a movie or TV show title above to start
              exploring.
            </p>
          </div>
        )}
    </main>
  );
}

export default Search;