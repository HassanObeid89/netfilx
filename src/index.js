import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./state/AuthProvider";
import { ModalProvider } from "./state/ModalProvider";
import { ShowsProvider } from "./state/ShowsProvider";
import { UserProvider } from "./state/UserProvider";

ReactDOM.render(
  <AuthProvider>
    <UserProvider>
      <ShowsProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </ShowsProvider>
    </UserProvider>
  </AuthProvider>,
  document.getElementById("root")
);
