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
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-lg focus-visible:outline-2 focus-visible:outline-[#00b8a9] focus-visible:outline-offset-3"
              aria-label="CineVault home"
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#6c63ff]"
                aria-hidden="true"
              >
                <Film size={20} />
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
                className="flex items-center gap-2 rounded-md text-sm text-slate-500 transition hover:text-white focus-visible:outline-2 focus-visible:outline-[#00b8a9] focus-visible:outline-offset-2"
              >
                <Film size={15} aria-hidden="true" />
                Home
              </Link>

              <Link
                to="/movies"
                className="flex items-center gap-2 rounded-md text-sm text-slate-500 transition hover:text-white focus-visible:outline-2 focus-visible:outline-[#00b8a9] focus-visible:outline-offset-2"
              >
                <Film size={15} aria-hidden="true" />
                Movies
              </Link>

              <Link
                to="/tv"
                className="flex items-center gap-2 rounded-md text-sm text-slate-500 transition hover:text-white focus-visible:outline-2 focus-visible:outline-[#00b8a9] focus-visible:outline-offset-2"
              >
                <Film size={15} aria-hidden="true" />
                TV Shows
              </Link>

              <Link
                to="/search"
                className="flex items-center gap-2 rounded-md text-sm text-slate-500 transition hover:text-white focus-visible:outline-2 focus-visible:outline-[#00b8a9] focus-visible:outline-offset-2"
              >
                <Search size={15} aria-hidden="true" />
                Search
              </Link>

              <Link
                to="/watchlist"
                className="flex items-center gap-2 rounded-md text-sm text-slate-500 transition hover:text-white focus-visible:outline-2 focus-visible:outline-[#00b8a9] focus-visible:outline-offset-2"
              >
                <Heart size={15} aria-hidden="true" />
                My List
              </Link>
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Project
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              CineVault is an API-driven movie and TV show
              discovery project built with React, Express,
              and TMDB.
            </p>

            <div className="mt-5 rounded-lg border border-white/5 bg-white/[0.02] p-4">
              <p className="text-xs leading-5 text-slate-500">
                This product uses the TMDB API but is not
                endorsed or certified by TMDB.
              </p>

              <a
                href="https://www.themoviedb.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-xs font-medium text-slate-400 transition hover:text-white focus-visible:outline-2 focus-visible:outline-[#00b8a9] focus-visible:outline-offset-2"
              >
                Visit TMDB
              </a>
            </div>

            <div className="mt-5 flex flex-col items-start gap-3">
              <a
                href="https://github.com/adrianjosephbayonon-hue/-Movie-TV-Show-Explorer"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md text-sm text-slate-400 transition hover:text-white focus-visible:outline-2 focus-visible:outline-[#00b8a9] focus-visible:outline-offset-2"
              >
                GitHub
              </a>

              <Link
                to="/privacy"
                className="rounded-md text-sm text-slate-400 transition hover:text-white focus-visible:outline-2 focus-visible:outline-[#00b8a9] focus-visible:outline-offset-2"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="rounded-md text-sm text-slate-400 transition hover:text-white focus-visible:outline-2 focus-visible:outline-[#00b8a9] focus-visible:outline-offset-2"
              >
                Terms of Service
              </Link>

              <Link
                to="/cookies"
                className="rounded-md text-sm text-slate-400 transition hover:text-white focus-visible:outline-2 focus-visible:outline-[#00b8a9] focus-visible:outline-offset-2"
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

            <p>Built for movie and TV discovery.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;