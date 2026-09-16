import { ArrowLeft, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

function Privacy() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-5 py-12 lg:px-8 lg:py-16">
      <Link
        to="/"
        className="mb-10 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
      >
        <ArrowLeft size={17} aria-hidden="true" />
        Back to Home
      </Link>

      <header className="border-b border-white/5 pb-8">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#6c63ff]/10">
          <ShieldCheck
            size={28}
            className="text-[#6c63ff]"
            aria-hidden="true"
          />
        </div>

        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#00b8a9]">
          Legal
        </p>

        <h1 className="mt-2 text-4xl font-black tracking-tight text-white sm:text-5xl">
          Privacy Policy
        </h1>

        <p className="mt-4 text-sm text-slate-500">
          Last updated: September 17, 2026
        </p>
      </header>

      <div className="mt-10 space-y-10 text-slate-300">
        <section>
          <h2 className="text-2xl font-bold text-white">
            1. Introduction
          </h2>

          <p className="mt-3 leading-7">
            CineVault is a movie and TV show discovery application
            designed to help users explore entertainment titles,
            view publicly available title information, and save
            titles to a personal watchlist.
          </p>

          <p className="mt-3 leading-7">
            This Privacy Policy explains what information CineVault
            may process and how that information is used within the
            application.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">
            2. Information Stored by CineVault
          </h2>

          <p className="mt-3 leading-7">
            CineVault currently stores saved watchlist information
            in your browser's local storage. This allows your saved
            titles to remain available when you return to the
            application on the same browser.
          </p>

          <p className="mt-3 leading-7">
            CineVault does not currently require an account or
            password to use its core discovery features.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">
            3. How Information Is Used
          </h2>

          <p className="mt-3 leading-7">
            Information stored by CineVault is used to provide
            application features such as maintaining your personal
            My List/watchlist.
          </p>

          <p className="mt-3 leading-7">
            CineVault should not collect information beyond what is
            reasonably necessary for the application's available
            features.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">
            4. Third-Party Services
          </h2>

          <p className="mt-3 leading-7">
            CineVault uses third-party services to provide movie,
            TV show, image, and trailer-related content.
          </p>

          <div className="mt-5 rounded-xl border border-white/5 bg-[#121a2b] p-5">
            <h3 className="font-semibold text-white">
              TMDB
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              CineVault retrieves movie and TV show information from
              The Movie Database (TMDB). Information displayed by
              the application may therefore originate from TMDB.
            </p>
          </div>

          <div className="mt-4 rounded-xl border border-white/5 bg-[#121a2b] p-5">
            <h3 className="font-semibold text-white">
              YouTube
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Some title pages may display trailers using YouTube
              embedded players. YouTube may process information
              according to its own policies when an embedded player
              is loaded or interacted with.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">
            5. Cookies and Local Storage
          </h2>

          <p className="mt-3 leading-7">
            CineVault currently uses browser local storage for
            features such as the personal watchlist. Local storage
            is different from traditional HTTP cookies, although
            both involve storing information in the user's browser.
          </p>

          <p className="mt-3 leading-7">
            If analytics, advertising, or additional tracking
            technologies are introduced in the future, this policy
            should be updated before those technologies are used.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">
            6. Data Security
          </h2>

          <p className="mt-3 leading-7">
            CineVault takes reasonable steps to avoid exposing
            sensitive application credentials. Third-party API
            credentials used by the backend should not be included
            in frontend source code or publicly committed files.
          </p>

          <p className="mt-3 leading-7">
            However, no website or internet-connected application
            can guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">
            7. Children's Privacy
          </h2>

          <p className="mt-3 leading-7">
            CineVault is a general entertainment discovery
            application and is not specifically designed to collect
            personal information from children.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">
            8. Changes to This Policy
          </h2>

          <p className="mt-3 leading-7">
            This Privacy Policy may be updated when CineVault's
            features, third-party services, or data practices
            change. The updated version should include a revised
            date so users can identify when changes were made.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">
            9. Contact
          </h2>

          <p className="mt-3 leading-7">
            If CineVault is deployed as a public service, a valid
            contact method should be provided here for privacy
            questions or requests.
          </p>

          <div className="mt-5 rounded-xl border border-[#00b8a9]/20 bg-[#00b8a9]/5 p-5">
            <p className="text-sm leading-6 text-slate-300">
              This page is currently part of the CineVault project
              and should be reviewed and updated with the actual
              operator/contact information before public deployment.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Privacy;