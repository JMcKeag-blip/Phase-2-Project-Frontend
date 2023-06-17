import React from "react";

function FullPlanetList({planets}) {
    return(
    <div className="planetlist">
            <h1>Planets from across the galaxy!</h1>
        <div className="card-container">
            {planets}
        </div>
    </div>
    )
}

export default FullPlanetList