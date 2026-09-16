import { Info, Play } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="relative min-h-[560px] overflow-hidden"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(108,99,255,0.3),transparent_35%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,#0b1020_5%,rgba(11,16,32,0.92)_40%,rgba(11,16,32,0.55)_72%,#0b1020_100%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(0deg,#0b1020_0%,transparent_40%,rgba(11,16,32,0.25)_100%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-end px-5 pb-16 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#00b8a9]">
            Your next favorite
          </p>

          <h1
            id="hero-title"
            className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl"
          >
            Discover something
            <span className="block text-[#6c63ff]">
              worth watching.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            Explore movies and TV shows, find something new,
            and keep the titles you want to watch in one place.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/movies"
              className="inline-flex items-center gap-2 rounded-lg bg-[#6c63ff] px-5 py-3 font-semibold text-white transition hover:bg-[#5b52e6]"
            >
              <Play
                size={18}
                fill="currentColor"
                aria-hidden="true"
              />
              Explore Movies
            </Link>

            <Link
              to="/search"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
            >
              <Info
                size={18}
                aria-hidden="true"
              />
              Find a Title
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;