import React, { useState } from "react";
import { Card } from "semantic-ui-react";
import "./BeerCard.css";

function BeerCard({ beer, manageInventory, onUpdateInventory }) {
    const { name, label, description, style, brewery, location, abv, ibu, status } = beer;

    function handleInventoryChange(event) {
        fetch(`http://localhost:3000/beers/${beer.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                status: event.target.value,
            }),
        })
        .then(res => res.json())
        .then(updatedBeer => onUpdateInventory(updatedBeer))
    }

    return (
        <Card>
        <div className="beer-card">
            <div className="beer-card-inner">
                <div className="beer-card-front">
                    <div className="label">
                        <img src={label} />
                    </div>
                    <div className="name">{name}</div>
                    <div className="style">{style}</div>
                </div>
                <div className="beer-card-back">
                    <div className="brewery-info">
                        {brewery}
                        <br />
                        {location}
                    </div>
                    <div className="details">
                        {description}
                        <br />
                        ABV: {abv} IBU: {ibu}
                    </div>
                </div>
            </div>
            {manageInventory ? 
            <div className="manage-inventory">
                <select onChange={handleInventoryChange} defaultValue={status}>
                    <option
                    value="On Tap">On Tap</option>
                    <option
                    value="Coming Soon">Coming Soon</option>
                    <option
                    value="x">X</option>
                </select>
            </div> : null}
        </div>
        </Card>
    )
}

export default BeerCard;