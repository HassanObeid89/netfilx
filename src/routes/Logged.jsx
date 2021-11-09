

import { Route } from "react-router-dom";
import FormAddSeason from "../components/FormAddSeason";
import FormAddEpisode from "../components/FormAddEpisode";
import FormAddMovies from "../components/FormAddMovie";
//Project files
import AdminPage from "../pages/AdminPage";
import FormAddSerie from "../components/FormAddSerie";
import HomeScreen from "../pages/HomeScreen";



export default function Logged() {
  
  return (
    <>
      <Route path="/" exact>
        <AdminPage  />
      </Route>
      <Route path="/add-episode/:id/:season">
        <FormAddEpisode />
      </Route>
      <Route path="/add-season/:id">
        <FormAddSeason />
      </Route>
      <Route path="/add-serie">
        <FormAddSerie />
      </Route>
      <Route path="/add-movie">
        <FormAddMovies />
      </Route>
      <Route path="/home-page">
        <HomeScreen />
      </Route>
    </>
  );
}
