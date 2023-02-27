import React from "react";
import BeerCard from "./BeerCard";
import { Card } from "semantic-ui-react";

function OnTap({ beers }) {
    const onTapBeerList = beers.map((beer) => (
        <BeerCard 
        key={beer.id}
        beer={beer}/>
    ))
    return (
        <div className="on-tap">
            <div className="heading">
                <h2>On Tap</h2>
            </div>
            <div className="cards">
                <Card.Group itemsPerRow={3}>{onTapBeerList}</Card.Group>
            </div>
        </div>
    )
}

export default OnTap;