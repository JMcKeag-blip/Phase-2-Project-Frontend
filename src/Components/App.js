import React, { useEffect, useState} from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import { Route, Switch } from "react-router-dom";
import FullPlanetList from "./FullPlanetList";
import Itinerary from "./Itinerary";
import PlanetCard from "./PlanetCard";

function App() {
  const [planetsInItinerary, setPlanetsInItinerary] = useState([])
  const [planetList, setPlanetList] = useState([])
  const [initialPlanetList, setInitialPlanetList] = useState([])

const travelList= planetsInItinerary.map(planet=>{
  return(
    <PlanetCard
      key={planet.id ? `${planet.name} ${planet.id}` : planet.name}
      planet={planet}
      location='itinerary'
      typeOfClick={handleItineraryClick}
      />
  )
})

const LOCAL= "http://localhost:3001/planets"
const API= "https://swapi.dev/api/planets/?page=2"

useEffect(()=> {
  fetch(LOCAL)
  .then(r => r.json())
  .then(d => setPlanetsInItinerary(d))

  fetch(API)
  .then(r => r.json())
  .then(d => setInitialPlanetList(d.results))
}, [])

useEffect(()=> {
  initialPlanetList.forEach(planet =>{
    fetch(`https://swapi.dev/api${planet.url}`)
    .then(r=> r.json())
    .then(d=> setPlanetList(previous=>
      [
        ...previous,
        <PlanetCard
            key={d.index}
            item={d}
            location='fullList'
            typeOfClick={handlePost}
          />
      ]
    ))
  })
}, [initialPlanetList])

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
