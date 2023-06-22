import React from "react";

function Itinerary({ items }) {
    const itemsToDisplay = [...items].sort((a, b) => {
        if(a.key > b.key){
            return 1
        }
        if(b.key > a.key){
            return -1
        }
        return 0
    })

    return (
        <div className="itinerary">
    	    <h1>Current Itinerary!</h1>
                <p className="home">
                    This is a alphabitized version of the planets that you currently have selected for travel!
                    Here you can also find planets added from the form tab as well. Happy travels! ... Maybe
                </p>
                <br/>
                <div className="card-container">
      	            {itemsToDisplay}
                </div>
        </div>
    )
}

export default Itinerary