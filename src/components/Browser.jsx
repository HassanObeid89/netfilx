//NPM packages
import { BrowserRouter, Switch } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { getCollection } from "../scripts/firestore";
import Logged from "../routes/Logged";
import UnLogged from "../routes/UnLogged";
import {useShow} from '../state/ShowsProvider';
export default function Browser({ isLogged,setIsLogged }) {

  const {dispatchShows} = useShow()
  const [status, setStatus] = useState(0)
  const fetchShows = useCallback(async (path) => {
    try {
      const shows = await getCollection(path);
      
      dispatchShows({ type: "SET_SHOWS", payload: shows });
      console.log(shows)
      setStatus(1);
    } catch {
      setStatus(2);
    }
  }, [dispatchShows]);

  useEffect(() => {isLogged && fetchShows("shows")}, [fetchShows,isLogged]);

  return (
    <BrowserRouter>
      {status === 1 && <Switch>{isLogged ? <Logged /> : <UnLogged setIsLogged={setIsLogged} />}</Switch>}
    </BrowserRouter>
  );
}
