// NPM package
import { createContext, useContext, useReducer } from "react";

//Project files
import showReducer from "./showReducer";

// Properties
const UserContext = createContext(null);

export function ShowsProvider({ children }) {
  // Local state
  const [shows, dispatchShows] = useReducer(showReducer, {});

  return (
    <UserContext.Provider
      value={{ shows: shows, dispatchShows: dispatchShows }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useShow() {
  return useContext(UserContext);
}
