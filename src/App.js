import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home.js"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/"></Route>
      </Switch>
    </BrowserRouter>
  )}

export default App;
