import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";

import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />

      {/* <Switch>
        <Route path="/" component={Home} exact>
          <Home />>
        </Route>
      </Switch> */}
    </Router>
  );
}

export default App;
