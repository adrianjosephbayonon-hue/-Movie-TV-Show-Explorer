import { ArrowLeft, FileText } from "lucide-react";
import { Link } from "react-router-dom";

function Terms() {
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
          <FileText
            size={28}
            className="text-[#6c63ff]"
            aria-hidden="true"
          />
        </div>

        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#00b8a9]">
          Legal
        </p>

        <h1 className="mt-2 text-4xl font-black tracking-tight text-white sm:text-5xl">
          Terms of Service
        </h1>

        <p className="mt-4 text-sm text-slate-500">
          Last updated: September 17, 2026
        </p>
      </header>

      <div className="mt-10 space-y-10 text-slate-300">
        <section>
          <h2 className="text-2xl font-bold text-white">
            1. Acceptance of Terms
          </h2>

          <p className="mt-3 leading-7">
            By accessing or using CineVault, you agree to use the
            application responsibly and in accordance with these
            Terms of Service.
          </p>

          <p className="mt-3 leading-7">
            If you do not agree with these terms, you should stop
            using the application.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">
            2. About CineVault
          </h2>

          <p className="mt-3 leading-7">
            CineVault is a movie and TV show discovery application.
            It provides search, discovery, title details, trailers,
            cast information, and a browser-based personal
            watchlist.
          </p>

          <p className="mt-3 leading-7">
            CineVault is not a movie or TV streaming service and
            does not provide unauthorized copies of copyrighted
            films or television programs.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">
            3. Third-Party Content
          </h2>

          <p className="mt-3 leading-7">
            CineVault relies on third-party services for certain
            information and media.
          </p>

          <div className="mt-5 rounded-xl border border-white/5 bg-[#121a2b] p-5">
            <h3 className="font-semibold text-white">
              TMDB
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Movie and TV show information may be provided through
              The Movie Database (TMDB).
            </p>
          </div>

          <div className="mt-4 rounded-xl border border-white/5 bg-[#121a2b] p-5">
            <h3 className="font-semibold text-white">
              YouTube
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Some trailers may be displayed through YouTube's
              embedded player. Users should follow YouTube's
              applicable terms when interacting with embedded
              content.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">
            4. Acceptable Use
          </h2>

          <p className="mt-3 leading-7">
            You agree not to misuse CineVault, interfere with its
            operation, attempt to bypass security controls, abuse
            its API endpoints, or use the application for unlawful
            purposes.
          </p>

          <p className="mt-3 leading-7">
            Automated requests, scraping, or other activity that
            places unreasonable load on CineVault or its third-party
            services may be restricted.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">
            5. Watchlist
          </h2>

          <p className="mt-3 leading-7">
            CineVault's My List feature currently stores saved title
            information in the user's browser using local storage.
          </p>

          <p className="mt-3 leading-7">
            Clearing browser storage, using a different browser or
            device, or certain browser privacy settings may remove
            access to previously saved titles.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">
            6. Content Accuracy
          </h2>

          <p className="mt-3 leading-7">
            CineVault displays information obtained from third-party
            sources. Information such as titles, release dates,
            ratings, descriptions, cast information, and genres may
            change or contain inaccuracies.
          </p>

          <p className="mt-3 leading-7">
            CineVault does not guarantee that third-party
            information is complete, current, or error-free.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">
            7. Intellectual Property
          </h2>

          <p className="mt-3 leading-7">
            CineVault does not claim ownership of third-party movie
            or TV show artwork, trailers, names, characters, or
            other copyrighted materials displayed through external
            services.
          </p>

          <p className="mt-3 leading-7">
            Third-party content remains subject to the rights and
            terms of its respective owners and providers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">
            8. Availability
          </h2>

          <p className="mt-3 leading-7">
            CineVault may occasionally be unavailable because of
            maintenance, technical problems, network issues, or
            interruptions involving third-party services.
          </p>

          <p className="mt-3 leading-7">
            Features may also be changed, suspended, or removed as
            the application develops.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">
            9. Disclaimer
          </h2>

          <p className="mt-3 leading-7">
            CineVault is provided for movie and TV show discovery.
            The application does not guarantee uninterrupted
            availability or complete accuracy of information
            supplied by third-party services.
          </p>

          <p className="mt-3 leading-7">
            Users are responsible for verifying information before
            relying on it for decisions outside the application's
            intended entertainment-discovery purpose.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">
            10. Changes to These Terms
          </h2>

          <p className="mt-3 leading-7">
            These Terms of Service may be updated when CineVault's
            functionality, services, or operating practices change.
            The updated version should include a revised date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white">
            11. Contact
          </h2>

          <p className="mt-3 leading-7">
            If CineVault is deployed publicly, a valid contact
            method should be provided here for questions regarding
            these Terms of Service.
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

export default Terms;