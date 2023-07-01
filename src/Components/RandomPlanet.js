import React, { useEffect, useState } from "react";

function RandomPlanet({ planets }) {
    const [num, setNum] = useState(0)
    const [more, setMore] = useState(0)
    const [display, setDisplay] = useState([])

    const shown = display.slice(0, num)

    useEffect(() => {
        setDisplay([...planets].sort(() => (Math.random() > .5 ? 1 : -1)))
    },[more, planets])

    function handleClick(e){
        if(e.target.name ==='new'){
            setMore(value => value + 1)
        }
        if(e.target.name === 'more'){
            setNum(value => value + 1)
        }
        if(e.target.name === 'less'){
            if(num > 0){
                setNum(value => value - 1)
            }
        }
    }
    return (
        <div className="randomPlanets">
            <h1>Random Planets</h1>
            <p className="home">
                Here in the Random Planet section you can select how many random planets you would like to get.
                To do so just adust the number of planets using the "More" or "Less" buttons below. You should see
                random planets getting added to a list of cards below. If at any point you need a new list of
                random planets just click the "New Random Planets" button and a new list of planets will be
                generated with the current number of planets selected. Planets clicked will still be added to the inventory
                just the same as if you clicked them from the full list of planets.
                <br/>
                <br/>
            </p>
            <button className="randomBtn" name="new" onClick={handleClick}>New Random Planets</button>
            <br/>
            <br/>
            <div className="btn-container">
                <button className="randomBtn" name="less" onClick={handleClick}>Less</button>
                <h1>{num}</h1>
                <button className="randomBtn" name="more" onClick={handleClick}>More</button>
            </div>
            <br/>
            <br/>
            <div className="card-container">
                {shown}
            </div>
        </div>
    )
}

export default RandomPlanet