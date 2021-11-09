import { useState, useCallback, useEffect } from "react";
import { getDocument } from "./scripts/firestore";
import { useAuth } from "./state/AuthProvider";
import { useUser } from "./state/UserProvider";
import Browser from "./components/Browser";
import "./css/style.css";

export default function App() {
  // Global state
  const { uid, setIsLogged, isLogged } = useAuth();
  const { dispatchUser } = useUser();
  const [status, setStatus] = useState(0);
  console.log(isLogged);
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
      {status === 0 && <p>loading...</p>}
      {status === 1 && (
        <Browser isLogged={isLogged} setIsLogged={setIsLogged} />
      )}
      {status === 2 && <p>Error...</p>}
    </div>
  );
}
