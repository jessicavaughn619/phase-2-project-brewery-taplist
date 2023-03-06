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

    function handleSubmit() {
        alert("New beer added!");
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
        .then(newBeer => onAddNewBeer(newBeer))
    }

    return (
        <div className="add-new-beer">
            <form onSubmit={handleSubmit} className="submit-form">
                <br />Beer Name:
                <input 
                type="text" 
                value={name}
                required="required"
                onChange={(e) => setName(e.target.value)}></input>
                <br />
                Label URL: <br /><input 
                type="text" 
                value={label} 
                required="required"
                onChange={(e) => setLabel(e.target.value)}></input>
                <br />
                Description: <br /><textarea 
                type="text" 
                value={description} 
                rows="6"
                required="required"
                onChange={(e) => setDescription(e.target.value)}></textarea>
                <br />
                Beer Style: <br /><input 
                type="text" 
                value={style} 
                required="required"
                onChange={(e) => setStyle(e.target.value)}></input>
                <br />
                Brewery: <br /><input 
                type="text" 
                value={brewery} 
                required="required"
                onChange={(e) => setBrewery(e.target.value)}></input>
                <br />
                Brewery Location: <br /><input 
                type="text" 
                value={location} 
                required="required"
                onChange={(e) => setLocation(e.target.value)}></input>
                <br />
                ABV: <br /><input 
                type="text" 
                value={abv} 
                required="required"
                onChange={(e) => setAbv(e.target.value)}></input>
                <br />
                IBU: <br /><input 
                type="text" 
                value={ibu} 
                required="required"
                onChange={(e) => setIbu(e.target.value)}></input>
                <br />
                Status: <br />
                <select 
                value={status} 
                required
                onChange={(e) => setStatus(e.target.value)}>
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