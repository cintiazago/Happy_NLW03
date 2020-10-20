import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Route from "./Routes";

import CreateOrphanage from "../pages/CreateOrphanage";
import Landing from "../pages/Landing";
import Orphanage from "../pages/Orphanage";
import OrphanagesMap from "../pages/OrphanagesMap";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />

        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />

        <Route path="/app" component={OrphanagesMap} isPrivate />

        <Route
          path="/orphanages/create"
          component={CreateOrphanage}
          isPrivate
        />
        <Route path="/orphanages/:id" component={Orphanage} isPrivate />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;