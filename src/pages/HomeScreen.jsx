import Banner from "../components/Banner";
import Row from "../components/Row";
import { useShow } from "../state/ShowsProvider";

export default function HomeScreen({ setMiniModal }) {
  const { shows } = useShow();
  const Movies = shows.filter((movie) => movie.category === "movies");

  const Series = shows.filter((serie) => serie.category === "series");

  const Documentaries = shows.filter(
    (documentary) => documentary.category === "documentaries"
  );

  /**
   * Architecture -1
   * If every <Row/> needs setMiniModal with the same value, then import it inside Row instead.
   * If you need to pass it as a prop from the parent (HomeScreen) then it may need to be global
   */
  return (
    <div className="home_page">
      <Banner series={Series} />
      <section className="row">
        <Row setMiniModal={setMiniModal} data={Series} />
        <Row setMiniModal={setMiniModal} data={Movies} />
        <Row setMiniModal={setMiniModal} data={Documentaries} />
      </section>
    </div>
  );
}
