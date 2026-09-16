import { ArrowLeft, Film, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();

  return (
    <main className="flex min-h-[calc(100vh-64px)] items-center justify-center px-5 py-16">
      <section
        className="w-full max-w-2xl text-center"
        aria-labelledby="not-found-title"
      >
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-[#6c63ff]/10">
          <Film
            size={38}
            className="text-[#6c63ff]"
            aria-hidden="true"
          />
        </div>

        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-[#00b8a9]">
          404 Error
        </p>

        <h1
          id="not-found-title"
          className="mt-3 text-5xl font-black tracking-tight text-white sm:text-6xl"
        >
          Page not found
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
          The page you're looking for doesn't exist or may have
          been moved somewhere else.
        </p>

        <div className="mt-4 rounded-lg border border-white/5 bg-[#121a2b] px-4 py-3">
          <p className="break-all text-sm text-slate-500">
            {location.pathname}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg bg-[#6c63ff] px-5 py-3 font-semibold text-white transition hover:bg-[#5b52e6]"
          >
            <Home size={18} aria-hidden="true" />
            Go Home
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/15"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            Go Back
          </button>
        </div>
      </section>
    </main>
  );
}

export default NotFound;