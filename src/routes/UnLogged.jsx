//NPM packages
import { Route } from "react-router-dom";

//Project files
import SignIn from "../pages/SignIn";

export default function UnLogged() {
  return (
    <>
      <Route component={SignIn} exact path="/sign-in" />
    </>
  );
}
