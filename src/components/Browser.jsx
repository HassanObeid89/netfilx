//NPM packages
import { BrowserRouter, Switch } from "react-router-dom";

import Logged from "../routes/Logged";
import UnLogged from "../routes/UnLogged";

export default function Browser({ isLogged, shows,setIsLogged }) {
  return (
    <BrowserRouter>
      <Switch>{isLogged ? <Logged shows={shows} /> : <UnLogged setIsLogged={setIsLogged} />}</Switch>
    </BrowserRouter>
  );
}
