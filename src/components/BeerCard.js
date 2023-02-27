import React from "react";
import { Card } from "semantic-ui-react";

function BeerCard({ beer }) {
    const { name, label, description, style, brewery, location, abv, ibu } = beer;
    return (
        <Card>
        <div className="beer-card">
            <div className="label">
                <img src={label} />
            </div>
            <div className="name">{name}</div>
            <div className="brewery-info">
                {brewery}
                <br />
                {location}
            </div>
            <div className="details">
                {style}
                <br />
                {description}
                <br />
                ABV: {abv} IBU: {ibu}
            </div>
        </div>
        </Card>
    )
}

export default BeerCard;