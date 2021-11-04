import { useState, useCallback, useEffect } from "react";
import { getCollection } from "./scripts/firestore";
import HomeScreen from "./pages/HomeScreen";
import FormAddMovie from "./components/FormAddMovie";
import FormAddSerie from "./components/FormAddSerie";

export default function App() {
  const [shows, setShows] = useState([]);
  const [status, setStatus] = useState(0);

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
      <h1>Netflix</h1>
      <HomeScreen shows={shows} />
      <FormAddMovie />
      <FormAddSerie/>
    </div>
  );
}
