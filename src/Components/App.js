import React, { useEffect, useState} from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import { Route, Switch } from "react-router-dom";
import FullPlanetList from "./FullPlanetList";
import Itinerary from "./Itinerary";
import PlanetCard from "./PlanetCard";
import Form from "./Form";
import RandomPlanets from "./RandomPlanets";

function App() {
  const [planetsInItinerary, setPlanetsInItinerary] = useState([])

const travelList= planetsInItinerary.map(planet => {
  return(
    <PlanetCard
      key={planet.id ? `${planet.name} ${planet.id}` : planet.name}
      planet={planet}
      location='itinerary'
      typeOfClick={handleDeleteClick}
      />
  )
})

const LOCAL= "http://localhost:3001/planets"

useEffect(()=> {
  fetch(LOCAL)
  .then(r => r.json())
  .then(d => setPlanetsInItinerary(d))
}, [])

function handlePost(planetToAdd){
  fetch(LOCAL, {
    method: "POST",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify(planetToAdd)
  })
    .then(r=> r.json())
    .then(d=> setPlanetsInItinerary([...planetsInItinerary, d]))
}

function handleDeleteClick(clicked){
  fetch(`${LOCAL}/${clicked.id}`, {
    method: "DELETE"
  })
  setPlanetsInItinerary(inItineraryPlanets => inItineraryPlanets.filter(each => each.id !== clicked.id))
}

  return(
    <>
      <h1 id="main-header"> Planet Explorer</h1>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Itinerary">
          <Itinerary planets={travelList}/>
        </Route>
        <Route exact path="/Form">
          <Form onHandleSubmit={handlePost}/>
        </Route>
        <Route exact path="/PlanetList">
          <FullPlanetList planets={starChart}/>
        </Route>
        <Route exact path="/RandomPlanets">
          <RandomPlanets planets={starChart}/>
        </Route>
      </Switch>
    </>
  )
}

export default App;
