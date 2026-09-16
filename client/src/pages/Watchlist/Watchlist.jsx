import { Heart, Trash2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import MovieCard from "../../components/MovieCard";
import {
  getWatchlist,
  removeFromWatchlist,
} from "../../utils/watchlist";

function Watchlist() {
  const [watchlist, setWatchlist] = useState(() =>
    getWatchlist()
  );

  function handleClearList() {
    setWatchlist([]);
    localStorage.removeItem("cinevault_watchlist");
  }

  function handleRemove(item) {
    const updatedList = removeFromWatchlist(
      item.id,
      item.media_type
    );

    setWatchlist(updatedList);
  }

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-5 py-10 lg:px-8">
      <header className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#00b8a9]">
            Your Collection
          </p>

          <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            My List
          </h1>

          <p className="mt-3 text-slate-400">
            {watchlist.length === 0
              ? "Titles you save will appear here."
              : `${watchlist.length} title${
                  watchlist.length !== 1 ? "s" : ""
                } saved`}
          </p>
        </div>

        {watchlist.length > 0 && (
          <button
            type="button"
            onClick={handleClearList}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-[#121a2b] px-4 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-[#e85d75]/40 hover:text-[#e85d75]"
          >
            <Trash2 size={17} aria-hidden="true" />
            Clear List
          </button>
        )}
      </header>

      {watchlist.length === 0 ? (
        <section className="rounded-xl border border-white/5 bg-[#121a2b] p-10 text-center">
          <Heart
            size={42}
            className="mx-auto text-[#6c63ff]"
            aria-hidden="true"
          />

          <h2 className="mt-4 text-xl font-bold text-white">
            Your list is empty
          </h2>

          <p className="mx-auto mt-2 max-w-md text-slate-400">
            Browse movies and TV shows and press the heart
            button to save titles you want to watch later.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/movies"
              className="rounded-lg bg-[#6c63ff] px-5 py-3 font-semibold text-white transition hover:bg-[#5b52e6]"
            >
              Browse Movies
            </Link>

            <Link
              to="/tv"
              className="rounded-lg bg-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/15"
            >
              Browse TV Shows
            </Link>
          </div>
        </section>
      ) : (
        <section aria-labelledby="watchlist-heading">
          <h2
            id="watchlist-heading"
            className="sr-only"
          >
            Saved Movies and TV Shows
          </h2>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {watchlist.map((item) => (
              <div
                key={`${item.media_type}-${item.id}`}
                className="relative"
              >
                <MovieCard movie={item} />

                <button
                  type="button"
                  onClick={() => handleRemove(item)}
                  aria-label={`Remove ${
                    item.title || item.name || "title"
                  } from My List`}
                  className="absolute bottom-16 right-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#0b1020]/90 text-slate-300 backdrop-blur-sm transition hover:bg-[#e85d75] hover:text-white"
                >
                  <Trash2
                    size={15}
                    aria-hidden="true"
                  />
                </button>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

export default Watchlist;