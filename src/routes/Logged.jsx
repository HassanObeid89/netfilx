//Npm package
import { useCallback, useEffect, useState } from "react";
import { Route } from "react-router-dom";

//Project files
import AdminPage from "../pages/AdminPage";
import FormAddSerie from "../components/FormAddSerie";
import HomeScreen from "../pages/HomeScreen";
import FormAddSeason from "../components/FormAddSeason";
import FormAddEpisode from "../components/FormAddEpisode";
import FormAddMovies from "../components/FormAddMovie";
import NavBar from "../components/NavBar";
import VideoPlayer from "../components/VideoPlayer";
import ModalContainer from "../components/ModalContainer";
import { useAuth } from "../state/AuthProvider";
import { getCollection } from "../scripts/firestore";
import { useShow } from "../state/ShowsProvider";
import RowCard from "../components/RowCard";

export default function Logged() {
  //Global state
  const { dispatchShows } = useShow();
  const { isLogged } = useAuth();

  //Local state
  const [status, setStatus] = useState(0);

  //Methods
  const fetchShows = useCallback(
    async (path) => {
      try {
        const shows = await getCollection(path);

        dispatchShows({ type: "SET_SHOWS", payload: shows });
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
      {status === 0 && <p>Loading...</p>}
      {status === 1 && (
        <div>
          <NavBar />
          <Route path="/" exact component={HomeScreen} />
          <Route path="/add-episode/:id/:season" component={FormAddEpisode} />
          <Route path="/add-season/:id" component={FormAddSeason} />
          <Route path="/add-serie" component={FormAddSerie} />
          <Route path="/add-movie" component={FormAddMovies} />
          <Route path="/admin-page" component={AdminPage} />
          <Route path="/watch/:id" component={VideoPlayer} />
          <ModalContainer />
        </div>
      )}
      {status === 2 && <p>Error</p>}
    </>
  );
}
