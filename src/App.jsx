import { useState, useCallback, useEffect } from "react";
import { getCollection,getDocument } from "./scripts/firestore";
import { useAuth } from "./state/AuthProvider";
import { useUser } from "./state/UserProvider";
import Browser from "./components/Browser";
import "./css/style.css";

export default function App() {
  // Global state
  const { uid, setIsLogged, isLogged } = useAuth();
  const { dispatchUser } = useUser();
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

  const fetchUser = useCallback(
    async (path, uid) => {
      if (uid === "no user") {
        setStatus(1);
      } else if (uid !== "") {
        const user = await getDocument(path, uid);
        dispatchUser({ type: "SET_USER", payload: user });
        setIsLogged(true);
      }
    },
    [dispatchUser, setIsLogged]
  );
  useEffect(() => {
    fetchShows("shows");
    fetchUser('users',uid)
  }, [fetchShows,uid,fetchUser]);

  return (
    <div className="App">
      {status === 0 && <p>loading...</p>}
      {status === 1 && <Browser shows={shows} isLogged={isLogged} setIsLogged={setIsLogged} />}
      {status === 2 && <p>Error...</p>}
    </div>
  );
}
