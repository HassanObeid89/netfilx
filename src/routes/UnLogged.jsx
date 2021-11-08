//NPM packages
import { Route } from "react-router-dom";

//Project files
import SignIn from "../pages/SignIn";

export default function UnLogged({setIsLogged}) {
  return (
    <>
      <Route exact path="/" ><SignIn setIsLogged={setIsLogged}/></Route>
    </>
  );
}
