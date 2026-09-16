import {
  Film,
  Heart,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#0b1020]">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2"
              aria-label="CineVault home"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#6c63ff]">
                <Film
                  size={20}
                  aria-hidden="true"
                />
              </span>

              <span className="text-lg font-bold tracking-tight">
                Cine<span className="text-[#00b8a9]">Vault</span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
              Discover movies and TV shows, explore details,
              and keep your favorite titles in one place.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h2>

            <nav
              className="mt-4 flex flex-col gap-3"
              aria-label="Footer navigation"
            >
              <Link
                to="/"
                className="flex items-center gap-2 text-sm text-slate-500 transition hover:text-white"
              >
                <Film
                  size={15}
                  aria-hidden="true"
                />
                Home
              </Link>

              <Link
                to="/movies"
                className="flex items-center gap-2 text-sm text-slate-500 transition hover:text-white"
              >
                <Film
                  size={15}
                  aria-hidden="true"
                />
                Movies
              </Link>

              <Link
                to="/tv"
                className="flex items-center gap-2 text-sm text-slate-500 transition hover:text-white"
              >
                <Film
                  size={15}
                  aria-hidden="true"
                />
                TV Shows
              </Link>

              <Link
                to="/search"
                className="flex items-center gap-2 text-sm text-slate-500 transition hover:text-white"
              >
                <Search
                  size={15}
                  aria-hidden="true"
                />
                Search
              </Link>

              <Link
                to="/watchlist"
                className="flex items-center gap-2 text-sm text-slate-500 transition hover:text-white"
              >
                <Heart
                  size={15}
                  aria-hidden="true"
                />
                My List
              </Link>
            </nav>
          </div>

          {/* Project */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Project
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              CineVault is an API-driven movie and TV show
              discovery project built with React, Express,
              and TMDB.
            </p>

            <div className="mt-5 flex flex-col items-start gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                GitHub
              </a>

              <Link
                to="/privacy"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                Terms of Service
              </Link>

              <Link
                to="/cookies"
                className="text-sm text-slate-400 transition hover:text-white"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6">
          <div className="flex flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {currentYear} CineVault. All rights reserved.
            </p>

            <p>
              Built for movie and TV discovery.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;