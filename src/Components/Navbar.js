import React from "react";
import { NavLink } from "react-router-dom"

const look = {
    width: "100px",
    height: "auto",
    padding: "15px",
    margin: "0 5px 5px",
    background: "rgb(116, 0, 0)",
    color: "rgb(227, 209, 186)",
}

const activated = {
    background: "yellow",
    color: "blue"
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
            </div>
        </div>
    )
}

export default Navbar