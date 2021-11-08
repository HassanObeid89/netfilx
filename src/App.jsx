import { useState, useCallback, useEffect } from "react";
import { getCollection } from "./scripts/firestore";
import Browser from "./components/Browser";
import "./css/style.css";

export default function App() {
  const [shows, setShows] = useState([]);
  const [status, setStatus] = useState(0);
  const [isLogged, setIsLogged] = useState(true)

  const fetchShows = useCallback(async (path) => {
    try {
      const shows = await getCollection(path);
      setShows(shows);
      // dispatchCourses({ type: "SET_COURSES", payload: courses });
      setStatus(1);
    } catch {
      setStatus(2);
    }
  }, []);
  useEffect(() => {
    fetchShows("shows");
  }, [fetchShows]);

  return (
    <div className="App">
      {status === 0 && <p>loading...</p>}
      {status === 1 && <Browser shows={shows} isLogged={isLogged} />}
      {status === 2 && <p>Error...</p>}
    </div>
  );
}
