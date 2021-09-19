import Testowa from "./pages/Testowa";

import { Route, Switch, Redirect } from "react-router-dom";

function App({}) {
  return (
    <div>
      <Switch>
        <Route path="/" render={() => <Testowa />} />

        <Route path="/admin">
          <Redirect to="/" />
        </Route>

        <Route path="/login" render={() => <Redirect to="/" />} />
      </Switch>
    </div>
  );
}

export default App;
