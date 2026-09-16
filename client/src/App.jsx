import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MovieDetails from "./pages/Details/MovieDetails";
import TVDetails from "./pages/Details/TVDetails";
import Movies from "./pages/Movies/Movies";
import TV from "./pages/TV/TV";
import Search from "./pages/Search/Search";
import Watchlist from "./pages/Watchlist/Watchlist";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0b1020] text-white">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/movies" element={<Movies />} />

          <Route path="/tv" element={<TV />} />

          <Route path="/search" element={<Search />} />

          <Route path="/watchlist" element={<Watchlist />} />

          <Route
            path="/movie/:id"
            element={<MovieDetails />}
          />

          <Route
            path="/tv/:id"
            element={<TVDetails />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;