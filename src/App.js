import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home.js"
import NavBar from "./components/NavBar.js"
import "tailwindcss/tailwind.css"

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
