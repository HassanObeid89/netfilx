//NPM packages
import { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Switch } from "react-router-dom";

//Project files
import Logged from "../routes/Logged";
import UnLogged from "../routes/UnLogged";
import { useAuth } from "../state/AuthProvider";
import { getCollection } from "../scripts/firestore";
import { useShow } from "../state/ShowsProvider";

export default function Browser() {
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
    <BrowserRouter>
      <Switch>
        {status===0 && <p>Loading...</p>}
        {isLogged && status === 1 ? <Logged /> : <UnLogged />}
        
      </Switch>
    </BrowserRouter>
  );
}
