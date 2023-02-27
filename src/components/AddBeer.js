import React, { useState } from "react";

function AddBeer({ onAddNewBeer }) {
    const [name, setName] = useState("");
    const [label, setLabel] = useState("");
    const [description, setDescription] = useState("");
    const [style, setStyle] = useState("");
    const [brewery, setBrewery] = useState("");
    const [location, setLocation] = useState("");
    const [abv, setAbv] = useState("");
    const [ibu, setIbu] = useState("");
    const [status, setStatus] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const formData = {
            name,
            label,
            description,
            style,
            brewery,
            location,
            abv,
            ibu,
            status
        }
        fetch("http://localhost:3000/beers", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(formData),
        })
        .then(res => res.json())
        .then((newBeer) => onAddNewBeer(newBeer))
    }

    return(
        <div>
            <h1>Add New Beer</h1>
            <form onSubmit={handleSubmit}>
                Name: <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}></input>
                Label: <input 
                type="text" 
                value={label} 
                onChange={(e) => setLabel(e.target.value)}></input>
                Description: <input 
                type="text" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)}></input>
                Style: <input 
                type="text" 
                value={style} 
                onChange={(e) => setStyle(e.target.value)}></input>
                Brewery: <input 
                type="text" 
                value={brewery} 
                onChange={(e) => setBrewery(e.target.value)}></input>
                Location: <input 
                type="text" 
                value={location} 
                onChange={(e) => setLocation(e.target.value)}></input>
                ABV: <input 
                type="text" 
                value={abv} 
                onChange={(e) => setAbv(e.target.value)}></input>
                IBU: <input 
                type="text" 
                value={ibu} 
                onChange={(e) => setIbu(e.target.value)}></input>
                Status: <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option>---</option>
                    <option>On Tap</option>
                    <option>Coming Soon</option>
                    <option>X</option>
                </select>
                <button>Add Beer</button>
            </form>
        </div>
    )
}

export default AddBeer;