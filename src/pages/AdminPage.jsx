import { Link } from "react-router-dom";
import FormAddSerie from "../components/FormAddSerie";
import ShowCard from "../components/ShowCard";

export default function AdminPage({ shows }) {
  const Movies = shows
    .filter((movie) => movie.category === "movies")
    .map((movie, index) => <ShowCard key={index} data={movie} />);

  const Series = shows
    .filter((serie) => serie.category === "series")
    .map((serie, index) => <ShowCard key={index} data={serie} />);

  const Documentaries = shows
    .filter((documentary) => documentary.category === "documentaries")
    .map((documentary, index) => <ShowCard key={index} data={documentary} />);

  return (
    <div>
      <h1>admin page</h1>
      <h2>Movies & Documentaries</h2>
      {Movies.length > 0 || Documentaries.length > 0 ? <ul>{Movies}
      {Documentaries}</ul>:<p>No Movies or Documentaries yet!</p>}
      <Link className='primary-button' to="/add-movie">Add Movie & Documentary</Link>
      <h2>Series</h2>
      <ul>{Series.length > 0 ? Series:<p>No Series yet!</p>}</ul>
      <Link className='primary-button' to="/add-serie">Add Serie</Link>
    </div>
  );
}
