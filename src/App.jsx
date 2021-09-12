import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import SliderLayout from "./components/SliderLayout";
import NewsDesk from "./components/NewsDesk";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <SliderLayout />
      <NewsDesk />
      <Footer />
      {/* <Switch>
        <Route path="/" component={Home} exact>
          <Home />>
        </Route>
      </Switch> */}
    </Router>
  );
}

export default App;
