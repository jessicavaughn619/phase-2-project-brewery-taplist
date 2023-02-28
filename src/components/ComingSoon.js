import React from "react";
import BeerCard from "./BeerCard";
import { Card } from "semantic-ui-react";
import "./ComingSoon.css";

function ComingSoon({ beers }) {
    const comingSoonBeerList = beers.map((beer) => (
        <BeerCard 
        key={beer.id}
        beer={beer}/>
    ))
    return (
        <div className="coming-soon">
            <div className="heading">
                <h2>Coming Soon</h2>
            </div>
            <div className="cards">
                <Card.Group itemsPerRow={3}>{comingSoonBeerList}</Card.Group>
            </div>
        </div>
    )
}

export default ComingSoon;