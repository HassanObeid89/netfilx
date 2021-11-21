//NPM package
import { BrowserRouter, Switch } from "react-router-dom";

//Project files
import Logged from "../routes/Logged";
import UnLogged from "../routes/UnLogged";
import { useAuth } from "../state/AuthProvider";

export default function Browser() {
  const { isLogged } = useAuth();

  return (
    // You don't need the <> you can write the isLogged directly
    <BrowserRouter>
      <Switch>{isLogged ? <Logged /> : <UnLogged />}</Switch>
    </BrowserRouter>
  );
}
