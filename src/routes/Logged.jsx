import { useCallback, useEffect, useState } from "react";
import { getCollection } from "../scripts/firestore";
import { useShow } from "../state/ShowsProvider";
import { Route } from "react-router-dom";
import FormAddSeason from "../components/FormAddSeason";
import FormAddEpisode from "../components/FormAddEpisode";
import FormAddMovies from "../components/FormAddMovie";

//Project files
import AdminPage from "../pages/AdminPage";
import FormAddSerie from "../components/FormAddSerie";
import HomeScreen from "../pages/HomeScreen";

export default function Logged({ isLogged }) {
  const { dispatchShows } = useShow();
  const [status, setStatus] = useState(0);

  const fetchShows = useCallback(
    async (path) => {
      try {
        const shows = await getCollection(path);

        dispatchShows({ type: "SET_SHOWS", payload: shows });
        console.log(shows);
        setStatus(1);
      } catch {
        setStatus(2);
      }
    },
    [dispatchShows]
  );

  useEffect(() => {
    isLogged && fetchShows("shows");
  }, [fetchShows, isLogged]);

  return (
    <>
      {status === 1 && <Route path="/" exact component={AdminPage} />}
      <Route path="/add-episode/:id/:season" component={FormAddEpisode} />
      <Route path="/add-season/:id" component={FormAddSeason} />
      <Route path="/add-serie" component={FormAddSerie} />
      <Route path="/add-movie" component={FormAddMovies} />
      {status === 1 && <Route path="/home-page" component={HomeScreen} />}
    </>
  );
}
