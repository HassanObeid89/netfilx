//NPM packages
import { Route } from "react-router-dom";

//Project files
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

export default function UnLogged() {
  return (
    <>
      <Route exact path="/" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
    </>
  );
}
