import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./state/AuthProvider";
import { ShowsProvider } from "./state/ShowsProvider";
import { UserProvider } from "./state/UserProvider";

ReactDOM.render(
  <AuthProvider>
    <UserProvider>
      <ShowsProvider>
      <App />
      </ShowsProvider>
    </UserProvider>
  </AuthProvider>,
  document.getElementById("root")
);
