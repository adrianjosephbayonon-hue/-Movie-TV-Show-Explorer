import { BrowserRouter, Route, Routes } from "react-router-dom";

import CookieConsent from "./components/CookieConsent";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MovieDetails from "./pages/Details/MovieDetails";
import TVDetails from "./pages/Details/TVDetails";
import Movies from "./pages/Movies/Movies";
import TV from "./pages/TV/TV";
import Search from "./pages/Search/Search";
import Watchlist from "./pages/Watchlist/Watchlist";
import NotFound from "./pages/NotFound/NotFound";
import Privacy from "./pages/Privacy/Privacy";
import Terms from "./pages/Terms/Terms";
import Cookies from "./pages/Cookies/Cookies";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-[#0b1020] text-white">
        <Navbar />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/movies" element={<Movies />} />

            <Route path="/tv" element={<TV />} />

            <Route path="/search" element={<Search />} />

            <Route
              path="/watchlist"
              element={<Watchlist />}
            />

            <Route
              path="/movie/:id"
              element={<MovieDetails />}
            />

            <Route
              path="/tv/:id"
              element={<TVDetails />}
            />

            <Route
              path="/privacy"
              element={<Privacy />}
            />

            <Route
              path="/terms"
              element={<Terms />}
            />

            <Route
              path="/cookies"
              element={<Cookies />}
            />

            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </div>

        <Footer />

        <CookieConsent />
      </div>
    </BrowserRouter>
  );
}

export default App;