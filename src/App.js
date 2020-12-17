import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/">
        <div className="App">
          <h1>Kachii's React Page, it works! Trying again</h1>
          <p>Test paragraph</p>
        </div>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
