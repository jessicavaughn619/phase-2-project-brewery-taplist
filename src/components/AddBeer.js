import React, { useState } from "react";
import "./AddBeer.css";

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
            <h2>Add New Beer</h2>
            <form onSubmit={handleSubmit} className="submit-form">
                Name: <br /><input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}></input>
                <br />
                Label: <br /><input 
                type="text" 
                value={label} 
                onChange={(e) => setLabel(e.target.value)}></input>
                <br />
                Description: <br /><input 
                type="text" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)}></input>
                <br />
                Style: <br /><input 
                type="text" 
                value={style} 
                onChange={(e) => setStyle(e.target.value)}></input>
                <br />
                Brewery: <br /><input 
                type="text" 
                value={brewery} 
                onChange={(e) => setBrewery(e.target.value)}></input>
                <br />
                Location: <br /><input 
                type="text" 
                value={location} 
                onChange={(e) => setLocation(e.target.value)}></input>
                <br />
                ABV: <br /><input 
                type="text" 
                value={abv} 
                onChange={(e) => setAbv(e.target.value)}></input>
                <br />
                IBU: <br /><input 
                type="text" 
                value={ibu} 
                onChange={(e) => setIbu(e.target.value)}></input>
                <br />
                Status: <br /><select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option>---</option>
                    <option>On Tap</option>
                    <option>Coming Soon</option>
                    <option>X</option>
                </select>
                <br />
                <button className="submit-button">Add Beer</button>
            </form>
        </div>
    )
}

export default AddBeer;