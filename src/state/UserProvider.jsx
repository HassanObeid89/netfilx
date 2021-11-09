// NPM package
import { createContext, useContext, useReducer } from "react";

//Project files
import userReducer from "./userReducer";

// Properties
const UserContext = createContext(null);

export function UserProvider({ children }) {
  // Local state
  const [user, dispatchUser] = useReducer(userReducer, {});

  return (
    <UserContext.Provider value={{ user, dispatchUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
