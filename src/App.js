import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./components/Home.js"
import NavBar from "./components/NavBar.js"
// import About from ".components/About.js"

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route component={Home} path="/"></Route>
      </Switch>

    </BrowserRouter>

  )}

export default App;
