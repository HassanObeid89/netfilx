//NPM packages
import { BrowserRouter, Switch } from "react-router-dom";

//Project files
import Logged from "../routes/Logged";
import UnLogged from "../routes/UnLogged";
import { useAuth } from "../state/AuthProvider";

export default function Browser() {
  const { isLogged } = useAuth();
  return (
    <BrowserRouter>
      <Switch>{isLogged ? <Logged /> : <UnLogged />}</Switch>
    </BrowserRouter>
  );
}
