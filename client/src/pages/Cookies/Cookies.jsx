import { ArrowLeft, Cookie } from "lucide-react";
import { Link } from "react-router-dom";

function Cookies() {
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
          <Cookie
            size={28}
            className="text-[#6c63ff]"
            aria-hidden="true"
          />
        </div>

        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#00b8a9]">
          Legal
        </p>

        <h1 className="mt-2 text-4xl font-black tracking-tight text-white sm:text-5xl">
          Cookie Policy
        </h1>

        <p className="mt-4 text-sm text-slate-500">
          Last updated: September 17, 2026
        </p>
      </header>

      <div className="mt-10 space-y-10 text-slate-300">
        <section>
          <h2 className="text-2xl font-bold text-white">
            1. What Are Cookies?
          </h2>

          <p className="mt-3 leading-7">
            Cookies are small pieces of information that websites
            may store in a user's browser. They can be used to
            remember preferences, maintain functionality, or
            understand how a website is being used.
          </p>

          <p className="mt-3 leading-7">
            CineVault may also use browser storage technologies,
            such as localStorage, for certain application features.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">
            2. How CineVault Uses Browser Storage
          </h2>

          <p className="mt-3 leading-7">
            The current CineVault project primarily uses local
            browser storage rather than traditional tracking cookies.
          </p>

          <div className="mt-5 overflow-hidden rounded-xl border border-white/5 bg-[#121a2b]">
            <div className="border-b border-white/5 p-5">
              <h3 className="font-semibold text-white">
                Watchlist
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Saved movies and TV shows may be stored locally in
                your browser so your My List can persist between
                visits.
              </p>
            </div>

            <div className="border-b border-white/5 p-5">
              <h3 className="font-semibold text-white">
                Consent Preferences
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                If CineVault uses a cookie-consent feature,
                your consent choice may be stored locally in your
                browser.
              </p>
            </div>

            <div className="p-5">
              <h3 className="font-semibold text-white">
                Application Preferences
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Future application preferences may also use browser
                storage when necessary for the application's
                functionality.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">
            3. Essential Storage
          </h2>

          <p className="mt-3 leading-7">
            Some browser storage may be necessary for CineVault
            features to work correctly. For example, the watchlist
            requires local storage to remember titles saved by the
            user.
          </p>

          <p className="mt-3 leading-7">
            Disabling browser storage may prevent certain features
            from functioning as intended.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">
            4. Analytics and Tracking
          </h2>

          <p className="mt-3 leading-7">
            The current CineVault implementation does not require
            third-party advertising cookies for its core discovery
            features.
          </p>

          <p className="mt-3 leading-7">
            If analytics or other tracking technologies are added in
            the future, this policy should be updated to explain
            what information is collected, why it is collected, and
            how users can manage their choices.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">
            5. Third-Party Services
          </h2>

          <p className="mt-3 leading-7">
            CineVault uses third-party services such as TMDB for
            movie and TV show information and YouTube for embedded
            trailers.
          </p>

          <p className="mt-3 leading-7">
            These third-party services may have their own cookies,
            storage technologies, privacy practices, and policies.
            Their practices are outside CineVault's direct control.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">
            6. Managing Cookies and Storage
          </h2>

          <p className="mt-3 leading-7">
            Most modern browsers allow users to view, block, or
            delete cookies and other stored website data through
            their browser settings.
          </p>

          <p className="mt-3 leading-7">
            Removing CineVault's local storage may also remove
            locally saved watchlist items and other stored
            preferences.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">
            7. Cookie Consent
          </h2>

          <p className="mt-3 leading-7">
            If CineVault introduces non-essential cookies or
            tracking technologies, users should be provided with
            appropriate information and choices before those
            technologies are activated where required by applicable
            law.
          </p>

          <p className="mt-3 leading-7">
            The consent experience should clearly distinguish
            necessary functionality from optional analytics,
            advertising, or other tracking technologies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">
            8. Changes to This Policy
          </h2>

          <p className="mt-3 leading-7">
            This Cookie Policy may be updated when CineVault's
            storage practices, third-party services, analytics
            features, or legal requirements change.
          </p>

          <p className="mt-3 leading-7">
            The date shown at the top of this page should be updated
            whenever significant changes are made.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">
            9. Contact
          </h2>

          <p className="mt-3 leading-7">
            If CineVault is deployed publicly, a valid contact
            method should be provided here for questions about this
            Cookie Policy or the application's use of browser
            storage.
          </p>

          <div className="mt-5 rounded-xl border border-[#00b8a9]/20 bg-[#00b8a9]/5 p-5">
            <p className="text-sm leading-6 text-slate-300">
              This page is currently part of the CineVault project
              and should be reviewed and updated with the actual
              operator and contact information before public
              deployment.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Cookies;