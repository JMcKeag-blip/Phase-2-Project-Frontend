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
    
}

export default RandomPlanet