import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import SliderLayout from "./components/SliderLayout";

import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <SliderLayout />
      {/* <Switch>
        <Route path="/" component={Home} exact>
          <Home />>
        </Route>
      </Switch> */}
    </Router>
  );
}

export default App;
