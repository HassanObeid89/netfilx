//NPM packages
import { Route } from "react-router-dom";

//Project files
import SignIn from "../pages/SignIn";
import SignUp from '../pages/SignUp'
export default function UnLogged({setIsLogged}) {
  return (
    <>
      <Route exact path="/" ><SignIn setIsLogged={setIsLogged}/></Route>
      <Route path='/sign-up'><SignUp setIsLogged={setIsLogged}/></Route>
    </>
  );
}
