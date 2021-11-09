import Row from "../components/Row";
import { useShow } from "../state/ShowsProvider";

export default function HomeScreen() {
 const {shows} = useShow()
  const Movies = shows
    .filter((movie) => movie.category === "movies")
    .map((movie, index) => <Row key={index} data={movie} />);

  const Series = shows
    .filter((serie) => serie.category === "series")
    .map((serie, index) => <Row key={index} data={serie} />);

  const Documentaries = shows
    .filter((documentary) => documentary.category === "documentaries")
    .map((documentary, index) => <Row key={index} data={documentary} />);

  return (
    <div>
      <h1>Home screen</h1>
      <h2>Series</h2>
      {Series}
      <h2>Movies</h2>
      {Movies}
      <h2>Documentaries</h2>
      {Documentaries}
    </div>
  );
}
