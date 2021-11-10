//Npm package
import { useState, useCallback, useEffect } from "react";

//Project files
import { getDocument } from "./scripts/firestore";
import { useAuth } from "./state/AuthProvider";
import { useUser } from "./state/UserProvider";
import Browser from "./components/Browser";
import "./css/style.css";

export default function App() {
  // Global state
  const { uid, setIsLogged } = useAuth();
  const { dispatchUser } = useUser();

  //Local state
  const [status, setStatus] = useState(0);

  //Methods
  const fetchUser = useCallback(
    async (path, uid) => {
      if (uid === "no user") {
        setStatus(1);
      } else if (uid !== "") {
        const user = await getDocument(path, uid);
        dispatchUser({ type: "SET_USER", payload: user });
        setStatus(1);
        setIsLogged(true);
      }
    },
    [dispatchUser, setIsLogged]
  );
  useEffect(() => fetchUser("users", uid), [uid, fetchUser]);

  return (
    <div className="App">
      {status === 0 && <p>Loading...</p>}
      {status === 1 && <Browser />}
      {status === 2 && <p>Error...</p>}
    </div>
  );
}
