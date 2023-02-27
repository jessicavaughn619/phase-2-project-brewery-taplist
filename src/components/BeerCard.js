import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function BeerCard({ beer }) {
    const { name, label, description, style, brewery, location, abv, ibu } = beer;
    const [showDetails, setShowDetails] = useState(false);

    function handleClick() {
        setShowDetails((showDetails) => !showDetails);
    }

    return (
        <Card>
        <div className="beer-card"
        onClick={handleClick}>
            <div className="label">
                <img src={label} />
            </div>
            <div className="name">{name}</div>
            <div className="style">{style}</div>
            <div className="brewery-info">
                {brewery}
                <br />
                {location}
            </div>
            {showDetails ? 
            <div className="details">
                {description}
                <br />
                ABV: {abv} IBU: {ibu}
            </div> : null}
        </div>
        </Card>
    )
}

export default BeerCard;