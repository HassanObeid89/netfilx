//NPM packages
import { BrowserRouter, Switch } from "react-router-dom";

import Logged from "../routes/Logged";
import UnLogged from "../routes/UnLogged";

export default function Browser({ isLogged, shows }) {
  return (
    <BrowserRouter>
      <Switch>{isLogged ? <Logged shows={shows} /> : <UnLogged />}</Switch>
    </BrowserRouter>
  );
}
