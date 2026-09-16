import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0b1020] text-white">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="*"
            element={
              <main className="mx-auto max-w-7xl px-5 py-20 text-center">
                <h1 className="text-3xl font-bold">
                  Page not found
                </h1>

                <p className="mt-3 text-slate-400">
                  The page you're looking for doesn't exist.
                </p>
              </main>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;