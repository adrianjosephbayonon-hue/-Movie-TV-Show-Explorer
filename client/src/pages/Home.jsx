import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";
import { sampleMovies } from "../utils/sampleMovies";

function Home() {
  return (
    <>
      <Hero />

      <main className="mx-auto max-w-7xl px-5 pb-12 lg:px-8">
        <MovieRow
          title="Trending Now"
          movies={sampleMovies}
        />

        <MovieRow
          title="Popular Movies"
          movies={[...sampleMovies].reverse()}
        />

        <MovieRow
          title="Popular TV Shows"
          movies={sampleMovies.slice(1)}
        />
      </main>
    </>
  );
}

export default Home;