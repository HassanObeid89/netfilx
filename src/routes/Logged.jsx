//NPM packages
import { Route } from "react-router-dom";
import FormAddSeason from "../components/FormAddSeason";
import FormAddEpisode from "../components/FormAddEpisode";
import FormAddMovies from "../components/FormAddMovie";
//Project files
import AdminPage from "../pages/AdminPage";
import FormAddSerie from "../components/FormAddSerie";

export default function Logged({ shows }) {
  const serie = shows.filter((serie) => serie.category === "series");

  return (
    <>
      <Route path="/" exact>
        <AdminPage shows={shows} />
      </Route>
      <Route path="/add-episode/:id/:season">
        <FormAddEpisode data={serie} />
      </Route>
      <Route path="/add-season/:id">
        <FormAddSeason data={serie} />
      </Route>
      <Route path="/add-serie">
        <FormAddSerie />
      </Route>
      <Route path="/add-movie">
        <FormAddMovies />
      </Route>
    </>
  );
}
