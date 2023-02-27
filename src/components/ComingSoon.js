import React from "react";
import BeerCard from "./BeerCard";
import { Card } from "semantic-ui-react";

function ComingSoon({ beers }) {
    const comingSoonBeerList = beers.map((beer) => (
        <BeerCard 
        key={beer.id}
        beer={beer}/>
    ))
    return (
        <div>
            <h2>Coming Soon</h2>
            <Card.Group itemsPerRow={3}>{comingSoonBeerList}</Card.Group>
        </div>
    )
}

export default ComingSoon;