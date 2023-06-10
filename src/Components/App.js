import React, { useEffect, useState} from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import { Route, Switch } from "react-router-dom";

function App() {
  const [initialPlanetList, setInitialPlanetList] = useState([])

const LOCAL= "http://localhost:3001/planets"

useEffect(()=> {
  fetch(LOCAL)
  .then(r => r.json())
  .then(d => setInitialPlanetList(d))
}, [])

  return(
    <>
      <h1 id="main-header"> Planet Explorer</h1>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  )
}

export default App;
