import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function BeerCard({ beer, manageInventory, onOnTapClick, onComingSoonClick }) {
    const { name, label, description, style, brewery, location, abv, ibu, id } = beer;
    const [showDetails, setShowDetails] = useState(false);

    function handleClick() {
        setShowDetails((showDetails) => !showDetails);
    }

    function handleOnTapClick(event) {
        onOnTapClick(event.target.value);
    }

    function handleComingSoonClick(event) {
        onComingSoonClick(event.target.value);
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
        {manageInventory ? 
        <div className="manage-inventory">
            <button onClick={handleOnTapClick}
            value={id}>On Tap</button>
            <button onClick={handleComingSoonClick}
            value={id}>Coming Soon</button>
        </div> : null}
        </Card>
    )
}

export default BeerCard;