import React, { useState } from "react";

function Form({ onHandleSubmit }) {
    const [formData, setFormData] = useState({
        name: "",
        gravitiy: "",
        population: "",
        climate: "",
        terrain: ""
    })
    const dataToPost = {
        "index": `HB ${formData.name}`,
        "name": formData.name,
        "gravitiy": formData.gravitiy,
        "population": formData.population,
        "climate": formData.climate,
        "terrain": formData.terrain
    }
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
    if(formData.name === '' || formData.gravitiy === '' || formData.terrain === ''){
        return window.alert('Please fill in all required forms.')
    }
    window.alert(`${formData.name}, has been added to the Itinerary.`)
    onHandleSubmit(dataToPost)
    setFormData({
        "index": `HB ${formData.name}`,
        "name": formData.name,
        "gravitiy": formData.gravitiy,
        "population": formData.population,
        "climate": formData.climate,
        "terrain": formData.terrain
    })
}

export default Form