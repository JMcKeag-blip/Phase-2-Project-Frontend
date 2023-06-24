import React, { useState } from "react";

function Form({ onHandleSubmit }) {
    const [formData, setFormData] = useState({
        name: "",
        gravity: "",
        population: "",
        climate: "",
        terrain: ""
    })
    const dataToPost = {
        "index": `HB ${formData.name}`,
        "name": formData.name,
        "gravity": formData.gravity,
        "population": formData.population,
        "climate": formData.climate,
        "terrain": formData.terrain
    }


function handleChange(e){
    const location = e.target.name
    const info = e.target.value

    setFormData({
        ...formData,
        [location]: info
    })
}

function handleSubmit(e){
    e.preventDefault()
    if(formData.name === '' || formData.gravity === '' || formData.terrain === ''){
        return window.alert('Please fill in all required forms.')
    }
    window.alert(`${formData.name}, has been added to the Itinerary.`)
    onHandleSubmit(dataToPost)
    setFormData({
        "index": `HB ${formData.name}`,
        "name": formData.name,
        "gravity": formData.gravity,
        "population": formData.population,
        "climate": formData.climate,
        "terrain": formData.terrain
    })
}

return (
    <div className="form-container">
        <p id="form-info">
            Here you can enter in your planets to the Itinerary!
            <br/>
            Any form elements that are bolded and or have an asterisk next to the title of the field
            are required elements for the form to be able to be submitted.
            <br/>
            Any custom planets will have a special category added to their cards in the itinerary.
            Also these planets may display some empty information to help distinguish them as a custom planet.
        </p>
        <form>
            <strong>*Planet Name </strong>
            <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder="Planet name..">
            </input>
            <br/>
            <strong>*Planet Gravity </strong>
            <input
                type='text'
                name='gravity'
                value={formData.gravity}
                onChange={handleChange}
                placeholder="Planet Gravity..">
            </input>
            <br/>
            <strong>*Planet Terrain</strong>
            <input
                type='text'
                name='terrain'
                value={formData.terrain}
                onChange={handleChange}
                maxLength='100'
                placeholder='Description of terrain.. max characters 100..'>
            </input>
            <p>Planet Population</p>
            <input
                type='text'
                name='population'
                value={formData.population}
                onChange={handleChange}
                placeholder='Planet population number'>
            </input>
            <br/>
            <p>Planet Climate</p>
            <input
                type='text'
                name='climate'
                value={formData.climate}
                onChange={handleChange}
                placeholder='Planetary Climate(s)'>
            </input>
            <input
                    className="form-submit"
                    type="submit"
                    name="submit"
                    value='Submit Planet'
                    onClick={handleSubmit}>
                </input>
        </form>
    </div>
    )
}

export default Form