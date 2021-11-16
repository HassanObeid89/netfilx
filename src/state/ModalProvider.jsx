// NPM package
import { createContext, useContext, useReducer } from "react";

//Project files
import modalReducer from "./modalReducer";

// Properties
const UserContext = createContext(null);

export function ModalProvider({ children }) {
  // Local state
  const [modal, dispatchModal] = useReducer(modalReducer, null);

  return (
    <UserContext.Provider
      value={{ modal: modal, dispatchModal: dispatchModal }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useModal() {
  return useContext(UserContext);
}
