import { Film, Heart, Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `transition-colors ${
      isActive
        ? "font-medium text-white"
        : "text-slate-400 hover:text-white"
    }`;

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0b1020]/95 backdrop-blur-md">
      <nav
        className="mx-auto max-w-7xl px-5 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2 rounded-lg focus-visible:outline-2 focus-visible:outline-[#00b8a9] focus-visible:outline-offset-3"
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

          <div className="hidden items-center gap-7 md:flex">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to="/movies" className={navLinkClass}>
              Movies
            </NavLink>

            <NavLink to="/tv" className={navLinkClass}>
              TV Shows
            </NavLink>

            <NavLink
              to="/watchlist"
              className={({ isActive }) =>
                `flex items-center gap-2 transition-colors ${
                  isActive
                    ? "font-medium text-white"
                    : "text-slate-400 hover:text-white"
                }`
              }
            >
              <Heart size={16} aria-hidden="true" />
              My List
            </NavLink>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/search"
              aria-label="Search movies and TV shows"
              className="flex h-10 w-10 items-center justify-center rounded-full text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-[#00b8a9] focus-visible:outline-offset-2"
            >
              <Search size={20} aria-hidden="true" />
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              aria-label={
                menuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="flex h-10 w-10 items-center justify-center rounded-full text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-[#00b8a9] focus-visible:outline-offset-2 md:hidden"
            >
              {menuOpen ? (
                <X size={21} aria-hidden="true" />
              ) : (
                <Menu size={21} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-white/5 py-4 md:hidden"
          >
            <div className="flex flex-col gap-1">
              <NavLink
                to="/"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 transition-colors focus-visible:outline-2 focus-visible:outline-[#00b8a9] focus-visible:outline-offset-[-2px] ${
                    isActive
                      ? "bg-white/10 font-medium text-white"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/movies"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 transition-colors focus-visible:outline-2 focus-visible:outline-[#00b8a9] focus-visible:outline-offset-[-2px] ${
                    isActive
                      ? "bg-white/10 font-medium text-white"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                Movies
              </NavLink>

              <NavLink
                to="/tv"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 transition-colors focus-visible:outline-2 focus-visible:outline-[#00b8a9] focus-visible:outline-offset-[-2px] ${
                    isActive
                      ? "bg-white/10 font-medium text-white"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                TV Shows
              </NavLink>

              <NavLink
                to="/watchlist"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `flex items-center gap-2 rounded-lg px-4 py-3 transition-colors focus-visible:outline-2 focus-visible:outline-[#00b8a9] focus-visible:outline-offset-[-2px] ${
                    isActive
                      ? "bg-white/10 font-medium text-white"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                <Heart size={17} aria-hidden="true" />
                My List
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;