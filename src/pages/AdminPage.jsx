//Npm packge
import { Link } from "react-router-dom";

//Project files
import ShowCard from "../components/ShowCard";
import { useShow } from "../state/ShowsProvider";
import { useUser } from "../state/UserProvider";
import ErrorPage from "./ErrorPage";

export default function AdminPage() {
  //Global state
  const { shows } = useShow();
  const { user } = useUser();
  const Movies = shows
    .filter((movie) => movie.category === "movies")
    .map((movie, index) => <ShowCard key={index} data={movie} />);

  const Series = shows
    .filter((serie) => serie.category === "series")
    .map((serie, index) => <ShowCard key={index} data={serie} />);

  const Documentaries = shows
    .filter((documentary) => documentary.category === "documentaries")
    .map((documentary, index) => <ShowCard key={index} data={documentary} />);

  return user.role === "admin" ? (
    <div className="admin-page">
      <h2>Movies & Documentaries</h2>
      {Movies.length > 0 || Documentaries.length > 0 ? (
        <ul className="shows-wrapper">
          {Movies}
          {Documentaries}
        </ul>
      ) : (
        <p>No Movies or Documentaries yet!</p>
      )}
      <Link className="primary-button" to="/add-movie">
        Add Movie / Documentary
      </Link>
      <h2>Series</h2>
      <ul className="shows-wrapper">
        {Series.length > 0 ? Series : <p>No Series yet!</p>}
      </ul>
      <Link className="primary-button" to="/add-serie">
        Add Serie
      </Link>
    </div>
  ) : (
    <ErrorPage />
  );
}
