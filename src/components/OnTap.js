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
        <div>
            <h2>On Tap</h2>
            <Card.Group itemsPerRow={3}>{onTapBeerList}</Card.Group>
        </div>
    )
}

export default OnTap;