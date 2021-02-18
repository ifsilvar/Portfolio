import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./pages/Home.js"

// import About from ".components/About.js"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/"></Route>
      </Switch>

    </BrowserRouter>

  )}

export default App;
