import { Cookie, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CONSENT_KEY = "cinevault_cookie_consent";

function CookieConsent() {
  const [visible, setVisible] = useState(() => {
    try {
      return localStorage.getItem(CONSENT_KEY) === null;
    } catch (error) {
      console.error("Failed to read cookie consent:", error);
      return true;
    }
  });

  function saveConsent(choice) {
    try {
      localStorage.setItem(CONSENT_KEY, choice);
    } catch (error) {
      console.error("Failed to save cookie consent:", error);
    }

    setVisible(false);
  }

  function handleAccept() {
    saveConsent("accepted");
  }

  function handleDecline() {
    saveConsent("declined");
  }

  if (!visible) {
    return null;
  }

  return (
    <aside
      className="fixed bottom-4 left-4 right-4 z-[60] mx-auto max-w-3xl rounded-2xl border border-white/10 bg-[#121a2b]/95 p-5 shadow-2xl backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-6"
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      <div className="flex items-start gap-4">
        <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#6c63ff]/10 sm:flex">
          <Cookie
            size={22}
            className="text-[#6c63ff]"
            aria-hidden="true"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2
                id="cookie-consent-title"
                className="text-base font-bold text-white"
              >
                Your privacy matters
              </h2>

              <p
                id="cookie-consent-description"
                className="mt-2 text-sm leading-6 text-slate-400"
              >
                CineVault uses browser storage for features such as
                your My List. We don't currently require optional
                advertising or analytics cookies for the core
                application.
              </p>
            </div>

            <button
              type="button"
              onClick={handleDecline}
              aria-label="Close cookie notice"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 transition hover:bg-white/10 hover:text-white"
            >
              <X
                size={18}
                aria-hidden="true"
              />
            </button>
          </div>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Link
              to="/cookies"
              className="text-sm font-medium text-[#00b8a9] transition hover:text-white"
            >
              Read Cookie Policy
            </Link>

            <div className="flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                onClick={handleDecline}
                className="rounded-lg bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                Decline
              </button>

              <button
                type="button"
                onClick={handleAccept}
                className="rounded-lg bg-[#6c63ff] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#5b52e6]"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default CookieConsent;