import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./state/AuthProvider";
import { UserProvider } from "./state/UserProvider";

ReactDOM.render(
  <AuthProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </AuthProvider>,
  document.getElementById("root")
);
