import React from "react";

function PlanetCard({ planet, typeOfClick, location }){

    const {
        name,
        gravity,
        population,
        climate,
        terrain
    } = planet

function handleClick(){
    if(location === 'itinerary'){
        let choice = window.confirm(`${planet.name} , Will be removed from your Itinerary!`)
        if(choice === true) typeOfClick(planet)
    }
    if(location === 'fullList'){
        typeOfClick(planet)
        window.alert(`${planet.name} , Has been added to your Itinerary!`)
    }
}

return(
    <div className="card" onClick={handleClick}>
        <h2>{name}</h2>
        <p>Gravitiy: {gravity}</p>
        <p>Population: {population}</p>
        <p>Climate: {climate}</p>
        <p>Terrain: {terrain}</p>
    </div>
    )
}

export default PlanetCard