//NPM packages
import { BrowserRouter, Switch } from "react-router-dom";

import Logged from "../routes/Logged";
import UnLogged from "../routes/UnLogged";

export default function Browser({ isLogged, setIsLogged }) {
  return (
    <BrowserRouter>
      <Switch>
        {isLogged ? (
          <Logged isLogged={isLogged} />
        ) : (
          <UnLogged setIsLogged={setIsLogged} />
        )}
      </Switch>
    </BrowserRouter>
  );
}
