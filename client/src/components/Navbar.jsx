import { Film, Heart, Search } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `transition-colors ${
      isActive
        ? "font-medium text-white"
        : "text-slate-400 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0b1020]/95 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="flex items-center gap-2"
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

        <div className="hidden items-center gap-7 md:flex">
          <NavLink
            to="/"
            className={navLinkClass}
          >
            Home
          </NavLink>

          <NavLink
            to="/movies"
            className={navLinkClass}
          >
            Movies
          </NavLink>

          <NavLink
            to="/tv"
            className={navLinkClass}
          >
            TV Shows
          </NavLink>

          <NavLink
            to="/watchlist"
            className="flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
          >
            <Heart
              size={16}
              aria-hidden="true"
            />
            My List
          </NavLink>
        </div>

        <Link
          to="/search"
          aria-label="Search movies and TV shows"
          className="flex h-10 w-10 items-center justify-center rounded-full text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
        >
          <Search
            size={20}
            aria-hidden="true"
          />
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;