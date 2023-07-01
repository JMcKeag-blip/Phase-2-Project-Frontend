import React from "react";
import { NavLink } from "react-router-dom"

const look = {
    width: "100px",
    height: "auto",
    padding: "15px",
    margin: "0 5px 5px",
    background: "rgb(100, 100, 100)",
    color: "rgb(230, 210, 190)",
}

const activated = {
    background: "goldenrod",
    color: "white"
}

function Navbar(){

    return (
        <div className="nav-container">
            <div className="navigation">
                <NavLink
                    to="/"
                    exact
                    style={look}
                    activeStyle={activated}
                >Home</NavLink>
                <NavLink
                    to="/Itinerary"
                    exact
                    style={look}
                    activeStyle={activated}
                >Itinerary</NavLink>
                <NavLink
                    to="/PlanetList"
                    exact
                    style={look}
                    activeStyle={activated}
                >Planet List</NavLink>
                <NavLink
                    to="/Form"
                    exact
                    style={look}
                    activeStyle={activated}
                >Form</NavLink>
                <NavLink
                    to="/RandomPlanets"
                    exact
                    style={look}
                    activeStyle={activated}
                >Random Planets</NavLink>
            </div>
        </div>
    )
}

export default Navbar